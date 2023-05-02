from django.shortcuts import render
from rest_framework import generics
from . import models
from .models import Category, Magazine, SubCategory, Comment
from .serializers import CategorySerializer, MagazineSerializer, SubCategorySerializer,commentsSerializer

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
    queryset = Magazine.objects.values("created_at","title","content","meta_description","slug","meta_title","id")
    serializer_class = MagazineSerializer


class Comments(generics.RetrieveAPIView):

    def commentsR(request,magazineId):
        try:
             snippet = Comment.objects.get(magazine_id=magazineId)
        except Comment.DoesNotExist:
            return HttpResponse(status=404)
        if request.method=='GET':
            lookup_field = "magazine_id"
            queryset = Comment.objects.values("name","email","text")
            serializer_class = commentsSerializer

        elif request.method == 'POST':
            comment_data = JSONParser().parse(request)
            comment_serializer = CommentSerializer(data=comment_data)
            if comment_serializer.is_valid():
                comment_serializer.save()
                return JsonResponse(comment_serializer.data, status=status.HTTP_201_CREATED) 
            return JsonResponse(comment_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    


    
