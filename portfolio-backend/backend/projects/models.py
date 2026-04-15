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

class Project(models.Model):

    CATEGORY_CHOICES = [
        ("company", "Company"),
        ("college", "College"),
        ("self", "Self"),
    ]

    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField()

    technologies = models.ManyToManyField(Technology, blank=True)

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES,
        default="self"
    )

    company = models.CharField(max_length=255, blank=True)
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    image = models.ImageField(upload_to='projects/')
    featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self):
        return self.title