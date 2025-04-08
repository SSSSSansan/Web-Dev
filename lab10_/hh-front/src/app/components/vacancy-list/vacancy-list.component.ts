import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';  // Добавляем импорт
import { CompanyService } from '../../services/company.service';
import { Vacancy } from '../../models/vacancy.model';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule],  // Указываем CommonModule в imports
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})

export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];
  companyId: number = 0;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Получаем ID компании из параметра маршрута
    this.companyId = +this.route.snapshot.paramMap.get('id')!;

    // Запрашиваем вакансии для компании по ID
    this.companyService.getVacanciesByCompany(this.companyId).subscribe((data) => {
      console.log('Ответ от сервера:', data);  // Логирование полученных данных
      this.vacancies = data;
    });
  }
}
