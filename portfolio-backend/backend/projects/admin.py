from django.contrib import admin
from .models import Badge, JourneyPoint, Project, ProjectTag, Technology, Icon, Journey


@admin.register(ProjectTag)
class ProjectTagAdmin(admin.ModelAdmin):
    list_display = ("label", "color")
    search_fields = ("label",)


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "icon", "badge", "is_active")
    list_filter = ("category", "is_active")
    search_fields = ("name",)
    autocomplete_fields = ("icon", "badge")


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "featured", "associated_with")
    list_filter = ("category", "featured")
    search_fields = ("title",)
    filter_horizontal = ("technologies", "tags")   # ← add tags here
    autocomplete_fields = ("associated_with",)


@admin.register(Icon)
class IconAdmin(admin.ModelAdmin):
    list_display = ("name", "icon_key", "icon_class")
    search_fields = ("name",)


@admin.register(Badge)
class BadgeAdmin(admin.ModelAdmin):
    list_display = ("label", "color")
    search_fields = ("label",)


class JourneyPointInline(admin.TabularInline):
    model = JourneyPoint
    extra = 1


@admin.register(Journey)
class JourneyAdmin(admin.ModelAdmin):
    list_display = ("role", "organization", "type", "start_date", "end_date")
    list_filter = ("type",)
    search_fields = ("role", "organization")
    inlines = [JourneyPointInline]