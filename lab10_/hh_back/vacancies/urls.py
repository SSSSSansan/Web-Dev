# vacancies/urls.py

from django.urls import path
from .views import CompanyListCreateView, VacancyListCreateView, VacancyListByCompanyView

urlpatterns = [
    path('companies/', CompanyListCreateView.as_view(), name='company-list'),
    path('vacancies/', VacancyListCreateView.as_view(), name='vacancy-list'),
    path('vacancies/company/<int:company_id>/', VacancyListByCompanyView.as_view(), name='vacancy-list-by-company'),
]
