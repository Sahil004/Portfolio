from django.db import models

class Icon(models.Model):
    name = models.CharField(max_length=100)       # React
    icon_key = models.CharField(max_length=100)   # SiReact
    icon_class = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name

class Badge(models.Model):
    label = models.CharField(max_length=100)  # "Hot", "2026 ★"
    color = models.CharField(max_length=50)   # "#ff6e9c"

    def __str__(self):
        return self.label   
class Technology(models.Model):

    CATEGORY_CHOICES = [
        ("frontend", "Frontend"),
        ("backend", "Backend"),
        ("database", "Database"),
        ("devops", "Tools & DevOps"),
        ("other", "Other"),
    ]

    name = models.CharField(max_length=100, unique=True)

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES
    )

    icon = models.ForeignKey(
        Icon,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    badge = models.ForeignKey(
        Badge,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order", "name"]

    def __str__(self):
        return self.name

from django.db import models


from django.db import models


class Journey(models.Model):
    TYPE_CHOICES = [
        ("company", "Company"),
        ("education", "Education"),
        ("certification", "Certification"),
    ]

    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    role = models.CharField(max_length=255)
    organization = models.CharField(max_length=255)

    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)

    image = models.ImageField(upload_to="journey/", blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-start_date", "-end_date"]

    def __str__(self):
        return f"{self.role} @ {self.organization}"

class JourneyPoint(models.Model):
    journey = models.ForeignKey(
        Journey,
        on_delete=models.CASCADE,
        related_name="points"
    )
    text = models.TextField()
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.text[:50]  
from django.db import models


class Project(models.Model):
    CATEGORY_CHOICES = [
        ("company", "Company"),
        ("college", "College"),
        ("self", "Self"),
    ]

    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    description = models.TextField()

    technologies = models.ManyToManyField(
        "Technology",
        blank=True,
        related_name="projects"
    )

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES,
        default="self"
    )

    associated_with = models.ForeignKey(
        "Journey",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="projects"
    )

    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)

    image = models.ImageField(upload_to="projects/")
    featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self):
        return self.title