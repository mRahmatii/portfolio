from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    
    path("api/", views.MagazineListView.as_view(), name="store_home"),
# lists all the products in the database

    path("api/category/", views.CategoryListView.as_view(), name="categories"),

    path("api/<slug:slug>/", views.Magazine.as_view(), name="magazine"),
    path("api/category/<slug:slug>/", views.MagazineItemView.as_view(), name="magazine_item"),
]