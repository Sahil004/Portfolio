from django.apps import AppConfig
from django.contrib.auth import get_user_model
import os

class ProjectsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'projects'

    def ready(self):
        if os.environ.get("CREATE_SUPERUSER") == "True":
            User = get_user_model()
            if not User.objects.filter(username="admin").exists():
                User.objects.create_superuser(
                    username="admin",
                    email="admin@example.com",
                    password="admin12345"
                )