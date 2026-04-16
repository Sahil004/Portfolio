from rest_framework import serializers
from .models import Project, Technology, Icon, Badge, Journey, JourneyPoint

class IconSerializer(serializers.ModelSerializer):
    class Meta:
        model = Icon
        fields = ["icon_key", "icon_class"]

class BadgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Badge
        fields = ["label", "color"]

class TechnologySerializer(serializers.ModelSerializer):
    icon = IconSerializer(read_only=True)
    badge = BadgeSerializer(read_only=True)

    class Meta:
        model = Technology
        fields = ["id", "name", "icon", "badge"]

class JourneyPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = JourneyPoint
        fields = ["text"]

class JourneySerializer(serializers.ModelSerializer):
    points = JourneyPointSerializer(many=True, read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Journey
        fields = [
            "id",
            "type",
            "role",
            "organization",
            "start_date",
            "end_date",
            "image",
            "points",
        ]

    def get_image(self, obj):
        request = self.context.get("request")
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None
class ProjectSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True, read_only=True)
    associated_with = JourneySerializer(read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "slug",
            "description",
            "category",
            "associated_with",
            "technologies",
            "github_url",
            "live_url",
            "image",
            "featured",
            "order",
            "created_at",
        ]

    def get_image(self, obj):
        request = self.context.get("request")
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None
