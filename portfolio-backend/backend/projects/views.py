from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Project, Technology, Icon
from .serializers import ProjectSerializer

@api_view(['GET'])
def get_projects(request):
    projects = Project.objects.all().order_by('-created_at')
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Technology

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Technology


@api_view(['GET'])
def get_skills(request):
    skills = (
        Technology.objects
        .filter(is_active=True)
        .select_related("icon", "badge")
        .order_by("order", "name")
        .all()
    )

    grouped = {}

    for skill in skills:
        category_label = skill.get_category_display()

        if category_label not in grouped:
            grouped[category_label] = []

        grouped[category_label].append({
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