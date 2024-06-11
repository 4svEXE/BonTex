import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss']
})
export class DeliveryInfoComponent {
  isActiveMoreDetails = false;

  order: Order = JSON.parse(orderData);

  onClose(){}

  onShowMoreDetails(){
    this.isActiveMoreDetails = !this.isActiveMoreDetails;
  }

  formatDate(dateString: string): string {
    const today = new Date();
    const targetDate = new Date(dateString);

    if (today.getFullYear() === targetDate.getFullYear() &&
        today.getMonth() === targetDate.getMonth() &&
        today.getDate() === targetDate.getDate()) {

      const hours = targetDate.getHours().toString().padStart(2, '0');
      const minutes = targetDate.getMinutes().toString().padStart(2, '0');
      return `Сьогодні – ${hours}:${minutes}`;
    } else {
      const year = targetDate.getFullYear().toString();
      const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
      const day = targetDate.getDate().toString().padStart(2, '0');
      const hours = targetDate.getHours().toString().padStart(2, '0');
      const minutes = targetDate.getMinutes().toString().padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    }
  }

  getPointImage(index: number) {
    const length = this.order.route.points.length;
    if (index === 0) {
      return 'assets/img/icons/location-dot.svg';
    } else if (index === length - 1) {
      return 'assets/img/icons/flag-checkered.svg';
    } else {
      return 'assets/img/icons/ellipse.svg';
    }
  }
}

interface Waypoint {
  position: number;
  willArrive: string;
  delivery_address: string;
}

interface Route {
  points: Waypoint[];
  start: string;
  finish: string;
  progress: number;
}

interface Ttn {
  uuid: string;
  number: string;
  document_type: string;
}

interface Order {
  weight: number;
  product_returns: boolean;
  warehouse_name: string;
  car: {
    number: string;
    name: string;
  };
  returnMoney: {
    sum: number;
    currency: string;
  };
  driver: {
    name: string;
    photo_url: string;
  };
  places: number;
  route: Route;
  ttn: Ttn[];
  returns: any;
}

const orderData = `{
  "weight": 4.296,
  "product_returns": true,
  "warehouse_name": "Луцьк",
  "car": {
      "number": "BK 7329 НІ",
      "name": "Renault DOKKER 1.5 DCI (NEW гарантія)"
  },
  "return_money": {
      "sum": 0.00,
      "currency": "ГРН"
  },
  "driver": {
      "name": "Базюк Володимир",
      "photo_url": "assets/img/icons/avatar_delete.png"
  },
  "places": 4,
  "route": {
      "points": [{
              "position": 4,
              "will_arrive": "2024-06-10T12:00:00Z",
              "delivery_address": "вул.Степанцова 111"
          },
          {
              "position": 34,
              "will_arrive": "2024-06-10T12:30:00Z",
              "delivery_address": "вул.Боженка 1"
          },
          {
              "position": 76,
              "will_arrive": "2024-06-10T14:30:00Z",
              "delivery_address": "вул.Боженка 34"
          },
          {
              "position": 100,
              "will_arrive": "2024-06-10T16:30:00Z",
              "delivery_address": "вул.Боженка 34"
          }
      ],
      "start": "2024-06-10T08:00:00Z",
      "finish": "2024-06-10T16:30:00Z",
      "progress": 76
  },
  "ttn": [
      {
          "uuid": "81CB005056BA39E811EEF3228D767523",
          "number": "00012351476",
          "document_type": "00003A4D"
      },
      {
          "uuid": "81CB005056BA39E811EEF3228D767523",
          "number": "00012351476",
          "document_type": "00003A4D"
      }
  ],
  "returns": null
}`
