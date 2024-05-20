import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuickOrderEntity } from "./entities/quick-order.entity";
import { MongoRepository } from "typeorm";
import { ObjectId } from "mongodb";
import { CreateQuickOrderDto } from "./dto/create-quick-order.dto";
import { UpdateQuickOrderDto } from "./dto/update-quick-order.dto";

@Injectable()
export class QuickOrderService {
  constructor(
    @InjectRepository(QuickOrderEntity)
    private quickOrderRepository: MongoRepository<QuickOrderEntity>
  ) {}

  async create(createQuickOrderDto: CreateQuickOrderDto) {
    const { productId, ...rest } = createQuickOrderDto;
    const order = new QuickOrderEntity({
      ...rest,
      productId: new ObjectId(productId),
    });
    return this.quickOrderRepository.save(order);
  }

  async findAll() {
    return this.quickOrderRepository.find();
  }

  async findById(id: string) {
    try {
      const objectId = new ObjectId(id);
      const order = await this.quickOrderRepository.findOne({
        where: { _id: objectId },
      });

      if (!order) {
        throw new NotFoundException(`QuickOrder with id ${id} not found`);
      }

      return order;
    } catch (error) {
      throw new NotFoundException(`QuickOrder with id ${id} not found`);
    }
  }

  async update(id: string, updateQuickOrderDto: UpdateQuickOrderDto) {
    const order = await this.findById(id);

    if (!order) {
      throw new NotFoundException(`QuickOrder with id ${id} not found`);
    }

    const { productId, ...rest } = updateQuickOrderDto;

    if (productId) {
      order.productId = new ObjectId(productId);
    }

    Object.assign(order, rest);

    order.updateTimestamps();

    return this.quickOrderRepository.save(order);
  }

  async remove(id: string) {
    return this.quickOrderRepository.delete(id);
  }
}
