import { SafeHtml } from '@angular/platform-browser';

export interface NotificationData {
  title: string;
  text: string;
}

export interface QuickOrder {
  _id?: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  productId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Order {
  _id?: string;
  customerId: string;
  orderDate: Date;
  status: string;
  totalAmount: number;
}

export interface OrderItem {
  _id?: string;
  orderId: string;
  variantId: string;
  quantity: number;
  price: number;
  details?: string;
}

export interface Review {
  id?: string;
  username: string;
  email: string;
  userId: string;
  productId: string;
  review: string;
  rating: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CartItem{
  id: string;
  quantity: number;
  price: number;
  details?: string;
}

export interface Product {
  id: string;
  name: string;
  group?: string; // хіт новинка акція
  oldPrice?: number;
  currentPrice: number;
  // Категорія продукту
  category: string;
  // Необов'язкове поле, що вказує на наявність знижки на продукт
  isDiscount?: boolean;
  // Виробник продукту
  manufacturer: string;
  // Одинична ціна продукту
  unit_price: number;
  // Опис продукту
  description: string;
  // Статус доступності продукту
  isAvailable: boolean;
  // Кількість продукту на складі
  quantity_in_stock: number;
  // Рейтинг популярності продукту
  popularity_rating: number;
  // Особливості продукту
  features: string[];
  // URL(и) зображення(ень) продукту
  product_image_url: string[];
  // Розміри доступні для продукту, з відповідними кількостями на складі
  sizes: {
    size: string;
    quantity_in_stock: number;
  }[];
  // Тип килима (якщо застосовується)
  rug_type: string;
  // Матеріал килима (якщо застосовується)
  rug_material: string;
  // Колір(и) килима (якщо застосовується)
  rug_color: string | string[];
  // Форма килима (якщо застосовується)
  rug_shape: string;
  // Країна походження килима (якщо застосовується)
  rug_country_of_origin: string;
  // Висота ворсу килима (якщо застосовується)
  rug_pile_height: number;
  // Матеріал підкладки килима (якщо застосовується)
  rug_backing_material: string;
  // Висота килима (якщо застосовується)
  rug_height: number;
  // SKU (номер одиниці обліку запасів) килима
  rug_sku: string | number;
  // Знижена ціна килима (якщо застосовується)
  rug_discounted_price?: number;

  created_at?: string;
}

export interface SafeSvg {
  [key: string]: SafeHtml;
}
