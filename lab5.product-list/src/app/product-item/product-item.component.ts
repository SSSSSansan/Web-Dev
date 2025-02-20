import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  likes: number;
}

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Input() index!: number;
  @Output() like = new EventEmitter<void>();
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  onLike() {
    this.like.emit();
  }

  shareOnWhatsApp() {
    const message = `Смотри, какой товар: ${this.product.name} - ${this.product.link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  deleteProduct() {
    this.remove.emit(this.index);
  }
}
