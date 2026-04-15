from rest_framework import serializers
from .models import Project, Technology, Icon, Badge

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

from rest_framework import serializers
from .models import Technology, Icon, Badge


class IconSerializer(serializers.ModelSerializer):
    class Meta:
        model = Icon
        fields = ["icon_key", "icon_class"]


class BadgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Badge
        fields = ["label", "color"]


class TechnologySerializer(serializers.ModelSerializer):
    icon = IconSerializer()
    badge = BadgeSerializer()

    class Meta:
        model = Technology
        fields = ["name", "icon", "badge"]