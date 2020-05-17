from rest_framework import serializers
from blog.models import (
    Post,
    Category,
)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'name',
            'banner',
            'description'
        ]


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer(required=False, read_only=True)

    class Meta:
        model = Post
        fields = [
            'writer',
            'banner',
            'title',
            'body',
            'created_date',
            'description',
            'image_set',
            'category'
        ]
