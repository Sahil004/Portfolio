from django.contrib import admin
from .models import Badge, Project, Technology, Icon



@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "icon", "badge", "is_active")
    list_filter = ("category", "is_active")
    search_fields = ("name",)
    autocomplete_fields = ("icon", "badge")


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "featured")
    list_filter = ("category", "featured")
    search_fields = ("title",)
    filter_horizontal = ("technologies",)  # 🔥 important

@admin.register(Icon)
class IconAdmin(admin.ModelAdmin):
    list_display = ("name", "icon_key", "icon_class")
    search_fields = ("name",)

@admin.register(Badge)
class BadgeAdmin(admin.ModelAdmin):
    list_display = ("label", "color")
    search_fields = ("label",)