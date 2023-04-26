from rest_framework import serializers
from .models import Category, SubCategory, Magazine

class MagazineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magazine
        fields = ["id","description", "title", "slug", "created_at","meta_description","content","meta_title"]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name", "slug"]

class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ["name", "slug"]