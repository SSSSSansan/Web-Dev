import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() category: string = '';

  allProducts: { [key: string]: Product[] } = {
    Смартфоны: [
      {
        image: 'assets/phone1.jpg',
        name: 'iPhone 15 Pro',
        description: 'Флагман Apple.',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/phone2.jpg',
        name: 'Samsung S23',
        description: 'Премиум Android.',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/phone3.jpg',
        name: 'Google Pixel 7',
        description: 'Чистый Android.',
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-512-gb-belyi-107402585/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/phone4.jpg',
        name: 'Xiaomi 13 Pro',
        description: 'Быстрая зарядка.',
        rating: 4.6,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-12-gb-512-gb-chernyi-115939564/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/phone5.jpg',
        name: 'OnePlus 11',
        description: 'Мощный процессор.',
        rating: 4.5,
        link: 'https://kaspi.kz/shop/p/oneplus-11-16-gb-256-gb-zelenyi-108973593/?c=750000000',
        likes: 0,
      },
    ],
    Ноутбуки: [
      {
        image: 'assets/laptop1.jpg',
        name: 'MacBook Air M2',
        description: 'Тонкий и мощный.',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/laptop2.jpg',
        name: 'ASUS ROG Strix',
        description: 'Игровой ноут.',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-512-gb-bez-os-g614ju-n3186-90nr0cc1-m00y20-117251822/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/laptop3.jpg',
        name: 'Dell XPS 15',
        description: 'OLED-дисплей.',
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/dell-xps-15-9500-15-6-16-gb-ssd-512-gb-win-11-pro-p91f001-135093177/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/laptop4.jpg',
        name: 'HP Spectre x360',
        description: 'Сенсорный экран.',
        rating: 4.6,
        link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-16-gb-ssd-1000-gb-win-11-14-eu0003ci-a19gjea-118723256/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/laptop5.jpg',
        name: 'Lenovo Legion 5',
        description: 'Игровая мощь.',
        rating: 4.5,
        link: 'https://kaspi.kz/shop/p/lenovo-legion-5-16-16-gb-ssd-512-gb-bez-os-16irx9-83dg00dwrk-120392379/?c=750000000',
        likes: 0,
      },
    ],
    Телевизоры: [
      {
        image: 'assets/tv1.jpg',
        name: 'Samsung QLED 55"',
        description: 'Чёткий дисплей.',
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/samsung-qe55q60dauxce-140-sm-seryi-119285285/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/tv2.jpg',
        name: 'LG OLED C2',
        description: 'Идеальный чёрный.',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/lg-75nano756qa-191-sm-chernyi-104822684/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/tv3.jpg',
        name: 'Sony Bravia XR',
        description: 'Современные технологии.',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/sony-kd55x81jr-140-sm-chernyi-101768309/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/tv4.jpg',
        name: 'TCL Mini LED',
        description: 'Отличное качество.',
        rating: 4.6,
        link: 'https://kaspi.kz/shop/p/tcl-65c765-165-sm-chernyi-124480526/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/tv5.jpg',
        name: 'Hisense U8H',
        description: 'Яркий экран.',
        rating: 4.5,
        link: 'https://kaspi.kz/shop/p/hisense-fc125d4bw1-95-l-belyi-101255213/?c=750000000',
        likes: 0,
      },
    ],
    Аксессуары: [
      {
        image: 'assets/headphones1.jpg',
        name: 'Sony WH-1000XM5',
        description: 'Топ наушники.',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/mouse.jpg',
        name: 'Logitech MX Master 3',
        description: 'Удобная мышь.',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/logitech-mx-master-3-darkgrey-temno-seryi-134843985/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/keyboard.jpg',
        name: 'Keychron K6',
        description: 'Механическая клавиатура.',
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/keychron-k6-k6w1-chernyi-107918259/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/smartwatch.jpg',
        name: 'Apple Watch Series 8',
        description: 'Лучшие смарт-часы.',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/apple-watch-series-8-41-mm-aluminum-chernyi-midnight-106362810/?c=750000000',
        likes: 0,
      },
      {
        image: 'assets/powerbank.jpg',
        name: 'Anker PowerCore',
        description: 'Надёжный пауэрбанк.',
        rating: 4.6,
        link: 'https://kaspi.kz/shop/p/anker-powercore-iii-elite-25600-mach-chernyi-116997301/?c=750000000',
        likes: 0,
      },
    ],
  };

  get products(): Product[] {
    return this.allProducts[this.category] || [];
  }

  addLike(index: number) {
    this.allProducts[this.category][index].likes++;
  }
  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}
