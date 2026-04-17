from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Journey, Project, Technology
from .serializers import JourneySerializer, ProjectSerializer, TechnologySerializer


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