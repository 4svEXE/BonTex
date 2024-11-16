import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./entities/user/user.module";
import { AuthModule } from "./entities/auth/auth.module";
import { ProductModule } from "./entities/product/product.module";
import { ReviewModule } from "./entities/review/review.module";
import { QuickOrderModule } from "./entities/quick-order/quick-order.module";
import { OrderModule } from "./entities/order/order.module";
import { OrderItemModule } from "./entities/order-item/order-item.module";
import { DeliveryInfoModule } from "./entities/delivery-info/delivery-info.module";

@Module({
  imports: [
    UserModule,
    ProductModule,
    ReviewModule,
    QuickOrderModule,
    OrderModule,
    OrderItemModule,
    DeliveryInfoModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: process.env.DB_URL,
      ssl: false,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
