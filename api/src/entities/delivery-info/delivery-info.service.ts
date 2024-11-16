import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryInfoEntity } from './entities/delivery-info.entity';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { CreateDeliveryInfoDto } from './dto/create-delivery-info.dto';
// import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class DeliveryInfoService {
  constructor(
    @InjectRepository(DeliveryInfoEntity)
    private deliveryInfoRepository: MongoRepository<DeliveryInfoEntity>
  ) {}

  async create(createDeliveryInfoDto: CreateDeliveryInfoDto) {
    const { orderId, ...rest } = createDeliveryInfoDto;
    const deliveryInfo = new DeliveryInfoEntity({
      ...rest,
      orderId: new ObjectId(orderId),
    });
    return this.deliveryInfoRepository.save(deliveryInfo);
  }

  async findByDeliveryId(deliveryId: string) {
    const objectId = new ObjectId(deliveryId);
    const deliveryInfo = await this.deliveryInfoRepository.findOne({
      where: { orderId: objectId },
    });
  }
}
