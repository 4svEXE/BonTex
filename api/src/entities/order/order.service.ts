import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: MongoRepository<OrderEntity>
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { customerId, ...rest } = createOrderDto;
    const order = new OrderEntity({
      ...rest,
      customerId: new ObjectId(customerId),
      orderDate: createOrderDto.orderDate || new Date(),
    });
    return this.orderRepository.save(order);
  }

  async findAll() {
    return this.orderRepository.find();
  }

  async findById(id: string) {
    const objectId = new ObjectId(id);
    const order = await this.orderRepository.findOne({
      where: { _id: objectId },
    });

    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.findById(id);

    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    Object.assign(order, updateOrderDto);

    order.updateTimestamps();

    return this.orderRepository.save(order);
  }

  async remove(id: string) {
    const objectId = new ObjectId(id);
    const result = await this.orderRepository.delete({ _id: objectId });

    if (result.affected === 0) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    return result;
  }
}
