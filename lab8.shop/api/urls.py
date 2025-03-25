from django.urls import path
from .views import product_list, product_detail, category_list, category_detail, category_products

urlpatterns = [
    path('products/', product_list, name='product-list'),  # ✅ GET /api/products
    path('products/<int:id>/', product_detail, name='product-detail'),  # ✅ GET /api/products/<id>
    path('categories/', category_list, name='category-list'),  # ✅ GET /api/categories
    path('categories/<int:id>/', category_detail, name='category-detail'),  # ✅ GET /api/categories/<id>
    path('categories/<int:id>/products/', category_products, name='category-products'),  # ✅ GET /api/categories/<id>/products
]
