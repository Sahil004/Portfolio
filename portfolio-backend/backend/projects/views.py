from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
from .models import Journey, Project, Technology
from .serializers import JourneySerializer, ProjectSerializer, TechnologySerializer, ContactMessageSerializer
from rest_framework import status


@api_view(['GET'])
def get_projects(request):
    projects = (
        Project.objects
        .select_related("associated_with")
        .prefetch_related(
            "tags",
            "technologies__icon",
            "technologies__badge",
            "associated_with__points",
        )
        .order_by("order", "-created_at")
    )
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_skills(request):
    skills = (
        Technology.objects
        .filter(is_active=True)
        .select_related("icon", "badge")
        .order_by("order", "name")
    )

    grouped = {}

    for skill in skills:
        category_label = skill.get_category_display()
        grouped.setdefault(category_label, []).append({
            "sequence": skill.order,
            "name": skill.name,
            "icon": skill.icon.icon_key if skill.icon else None,
            "iconClass": skill.icon.icon_class if skill.icon else "",
            "badge": {
                "label": skill.badge.label,
                "color": skill.badge.color,
            } if skill.badge else None,
        })

    return Response(grouped)


@api_view(["GET"])
def get_journey(request):
    journeys = (
        Journey.objects
        .prefetch_related("points")
        .order_by("-start_date", "-end_date")
    )
    serializer = JourneySerializer(journeys, many=True)
    return Response(serializer.data)



@api_view(["POST"])
def contact_us(request):
    serializer = ContactMessageSerializer(data=request.data)

    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    contact = serializer.save()

    # Email to you
    admin_subject = f"New Contact Message from {contact.name}"
    admin_context = {
        "name": contact.name,
        "email": contact.email,
        "message": contact.message,
    }
    admin_html = render_to_string("emails/contact_admin.html", admin_context)

    admin_email = EmailMultiAlternatives(
        subject=admin_subject,
        body=f"Name: {contact.name}\nEmail: {contact.email}\n\n{contact.message}",
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[settings.CONTACT_TO_EMAIL],
        reply_to=[contact.email],
    )
    admin_email.attach_alternative(admin_html, "text/html")
    admin_email.send()

    # Confirmation email to user
    user_subject = "Thanks for reaching out"
    user_context = {
        "name": contact.name,
    }
    user_html = render_to_string("emails/contact_user.html", user_context)

    user_email = EmailMultiAlternatives(
        subject=user_subject,
        body=f"Hi {contact.name}, thanks for your message.",
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[contact.email],
    )
    user_email.attach_alternative(user_html, "text/html")
    user_email.send()

    return Response(
        {"message": "Your message has been sent successfully."},
        status=status.HTTP_201_CREATED,
    )