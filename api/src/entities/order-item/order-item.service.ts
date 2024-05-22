import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItemEntity } from './entities/order-item.entity';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderItemEntity)
    private orderItemRepository: MongoRepository<OrderItemEntity>
  ) {}

  async create(createOrderItemDto: CreateOrderItemDto) {
    const { orderId, variantId, ...rest } = createOrderItemDto;
    const orderItem = new OrderItemEntity({
      ...rest,
      orderId: new ObjectId(orderId),
      variantId: new ObjectId(variantId),
    });
    return this.orderItemRepository.save(orderItem);
  }

  async findAll() {
    return this.orderItemRepository.find();
  }

  async findById(id: string) {
    const objectId = new ObjectId(id);
    const orderItem = await this.orderItemRepository.findOne({
      where: { _id: objectId },
    });

    if (!orderItem) {
      throw new NotFoundException(`OrderItem with id ${id} not found`);
    }

    return orderItem;
  }

  async update(id: string, updateOrderItemDto: UpdateOrderItemDto) {
    const orderItem = await this.findById(id);

    if (!orderItem) {
      throw new NotFoundException(`OrderItem with id ${id} not found`);
    }

    Object.assign(orderItem, updateOrderItemDto);

    return this.orderItemRepository.save(orderItem);
  }

  async remove(id: string) {
    const objectId = new ObjectId(id);
    const result = await this.orderItemRepository.delete({ _id: objectId });

    if (result.affected === 0) {
      throw new NotFoundException(`OrderItem with id ${id} not found`);
    }

    return result;
  }
}
