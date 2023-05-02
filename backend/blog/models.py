from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)
    slug = models.CharField(max_length=200)
    created_at = models.DateTimeField('date created')
    updated_at = models.DateTimeField('date updated')


class SubCategory(models.Model):
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    slug = models.CharField(max_length=200)
    created_at = models.DateTimeField('date created')
    updated_at = models.DateTimeField('date updated')

class Magazine(models.Model):
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategory_id = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    slug = models.CharField(max_length=200)
    meta_title = models.CharField(max_length=200,default='')
    meta_description = models.CharField(max_length=200,default='')
    description = models.CharField(max_length=1000,default='')
    content= models.TextField(default='')
    created_at = models.DateTimeField('date created')
    updated_at = models.DateTimeField('date updated')

class Comment(models.Model):
    magazine_id=models.ForeignKey(Magazine,on_delete=models.CASCADE)
    email= models.CharField(max_length=200)
    name= models.CharField(max_length=500)
    text= models.TextField(default='')