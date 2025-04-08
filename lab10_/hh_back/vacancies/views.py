# vacancies/views.py

from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# Класс для получения списка и создания новых компаний
class CompanyListCreateView(generics.ListCreateAPIView):
    queryset = Company.objects.all()  # База данных для списка компаний
    serializer_class = CompanySerializer  # Сериализатор для компании

# Класс для получения списка и создания новых вакансий
class VacancyListCreateView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()  # База данных для списка вакансий
    serializer_class = VacancySerializer  # Сериализатор для вакансий

# Класс для получения вакансий по конкретной компании
class VacancyListByCompanyView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['company_id']  # Получаем ID компании из URL
        return Vacancy.objects.filter(company_id=company_id)  # Фильтруем вакансии по ID компании
