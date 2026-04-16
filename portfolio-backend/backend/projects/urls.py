from django.urls import path
from .views import get_journey, get_projects, get_skills

urlpatterns = [
    path('projects/', get_projects),
    path("skills/", get_skills),
    path("journey/", get_journey),
]