import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryInfoEntity } from './entities/delivery-info.entity';
import { DeliveryInfoService } from './delivery-info.service';
import { DeliveryInfoController } from './delivery-info.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryInfoEntity])],
  providers: [DeliveryInfoService],
  controllers: [DeliveryInfoController],
})
export class DeliveryInfoModule {}