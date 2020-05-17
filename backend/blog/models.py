from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    banner = models.ImageField(upload_to='category_banners', default=None)

    def __str__(self):
        return self.name


class Post(models.Model):
    writer = models.ForeignKey(User, default=None, on_delete=models.CASCADE)
    banner = models.ImageField(upload_to='banners', default=None)
    title = models.CharField(max_length=100)
    body = models.TextField()
    created_date = models.DateField(auto_now_add=True)
    description = models.CharField(max_length=15)
    category = models.ForeignKey(
        Category, default=None, on_delete=models.CASCADE, null=True)
    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Image(models.Model):
    post = models.ForeignKey(Post, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='slides', default=None)
    caption = models.TextField()
