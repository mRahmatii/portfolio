from django.shortcuts import render
from rest_framework import generics
from . import models
from .models import Category, Magazine, SubCategory
from .serializers import CategorySerializer, MagazineSerializer, SubCategorySerializer

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SubCategoryListView(generics.ListAPIView):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer

class MagazineListView(generics.ListAPIView):
    queryset = Magazine.objects.values("id", "description","created_at","title","slug")
    serializer_class = MagazineSerializer

class Magazine(generics.RetrieveAPIView):
    lookup_field = "slug"
    queryset = Magazine.objects.values("created_at","title","content","meta_description","slug","meta_title")
    serializer_class = MagazineSerializer

class MagazineItemView(generics.ListAPIView):
    serializer_class = MagazineSerializer
    def get_queryset(self):
        return models.Magazine.objects.filter(
            magazine__in=Magazine.objects.get(slug=self.kwargs["slug"]).get_descendants(include_self=True)
        )
