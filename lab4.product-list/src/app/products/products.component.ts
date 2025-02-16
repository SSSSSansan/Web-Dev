import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      image: 'assets/1.jpg',
      name: 'Смартфон Xiaomi Redmi Note 12',
      description: 'Крутой смартфон с AMOLED-экраном и мощной батареей.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-8-gb-256-gb-sinii-podarok-109744675/?c=750000000',
    },
    {
      image: 'assets/2.jpg',
      name: 'Ноутбук Apple MacBook Air 13 M1',
      description: 'Тонкий и мощный ноутбук с чипом M1.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn93-100798912/?c=750000000',
    },
    {
      image: 'assets/3.jpg',
      name: 'Наушники Sony WH-1000XM4',
      description: 'Беспроводные наушники с шумоподавлением.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm4-chernyi-100471997/?c=750000000',
    },
    {
      image: 'assets/8.jpg',
      name: 'Игровая приставка Sony PlayStation 5',
      description: 'Мощная консоль нового поколения с крутой графикой.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
    },
    {
      image: 'assets/4.jpg',
      name: 'Часы Apple Watch Series 8',
      description: 'Современные смарт-часы с продвинутыми функциями.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-8-41-mm-aluminum-chernyi-midnight-106362810/?c=750000000',
    },
    {
      image: 'assets/5.jpg',
      name: 'Камера GoPro HERO 10',
      description: 'Экшн-камера для записи видео в любых условиях.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero-11-black-edition-chdhx-112-rw-115723801/?c=750000000',
    },
    {
      image: 'assets/6.jpg',
      name: 'Монитор LG 27GN950-B',
      description: 'Игровой монитор с разрешением 4K и частотой 144Hz.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/lg-27gn600-b-chernyi-105121392/?c=750000000',
    },
    {
      image: 'assets/7.jpg',
      name: 'Планшет Samsung Galaxy Tab S8',
      description: 'Современный планшет с поддержкой стилуса.',
      rating: 4.6,
      link: 'http://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000',
    },
    {
      image: 'assets/9.jpg',
      name: 'Смарт-колонка Amazon Echo Dot',
      description: 'Умная колонка с голосовым управлением.',
      rating: 4.5,
      link: 'http://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000',
    },
    {
      image: 'assets/10.jpg',
      name: 'Кофеварка DeLonghi ECAM 350.55',
      description: 'Кофемашина с множеством функций.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/kofemashina-delonghi-magnifica-s-smart-ecam-250-33-tb-seryi-100246352/?c=750000000',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  shareProduct(link: string) {
    const message = `Посмотри этот продукт: ${link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
      link
    )}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  }
}
