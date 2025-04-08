from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name

class Vacancy(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    company = models.ForeignKey(Company, related_name='vacancies', on_delete=models.CASCADE)

    def __str__(self):
        return self.title
