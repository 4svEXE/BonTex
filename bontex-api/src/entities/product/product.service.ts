import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: MongoRepository<ProductEntity>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = new ProductEntity(createProductDto);
    return this.productRepository.save(product);
  }

  async findAll() {
    return this.productRepository.find();
  }

  async findById(id: string) {
    try {
      const objectId = new ObjectId(id);
      const product = await this.productRepository.findOne({
        where: { _id: objectId },
      });

      if (!product) {
        throw new NotFoundException(`Product with id ${id} not found`);
      }

      return product;
    } catch (error) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
  }

  async findByProductname(productname: string) {
    const product = await this.productRepository.findOne({
      where: { productname: productname },
    });

    if (!product) {
      throw new NotFoundException(`Product with productname ${productname} not found`);
    }

    return product;
  }

  async findByEmail(email: string) {
    const product = await this.productRepository.findOne({ where: { email: email } });

    if (!product) {
      throw new NotFoundException(`Product with productname ${email} not found`);
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.findById(id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    Object.assign(product, updateProductDto);

    product.updateTimestamps();

    return this.productRepository.save(product);
  }

  async remove(id: string) {
    return this.productRepository.delete(id);
  }
}
