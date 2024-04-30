import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./entities/product.entity";
import { MongoRepository } from "typeorm";
import { ObjectId } from "mongodb";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: MongoRepository<ProductEntity>
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

  async findByCategory(category: string) {
    const products = await this.productRepository.find({
      where: { category: category },
    });

    if (!products) {
      throw new NotFoundException(
        `Product with category ${category} not found`
      );
    }

    return products;
  }

  async findByGroup(group: string) {
    const products = await this.productRepository.find({
      where: { group: group },
    });

    if (!products) {
      throw new NotFoundException(`Product with group ${group} not found`);
    }

    return products;
  }

  async findBySearchString(searchString: string) {
    const regex = new RegExp(searchString, "i"); // 'i' - ігнорувати регістр

    const products = await this.productRepository.find({
      where: {
        $or: [
          { name: { $regex: regex } },
          { group: { $regex: regex } },
          { category: { $regex: regex } },
          { manufacturer: { $regex: regex } },
          { rug_type: { $regex: regex } },
          { description: { $regex: regex } },
          { rug_material: { $regex: regex } },
          { rug_color: { $regex: regex } },
          { rug_country_of_origin: { $regex: regex } },
        ],
      },
    });

    if (!products) {
      throw new NotFoundException(`Products with '${searchString}' not found`);
    }

    return products;
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
