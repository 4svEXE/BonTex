import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ReviewEntity } from "./entities/review.entity";
import { MongoRepository } from "typeorm";
import { ObjectId } from "mongodb";
import { log } from "console";

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewEntity)
    private reviewRepository: MongoRepository<ReviewEntity>
  ) {}

  async create(createReviewDto: CreateReviewDto) {
    const review = new ReviewEntity(createReviewDto);
    return this.reviewRepository.save(review);
  }

  async findAll() {
    return this.reviewRepository.find();
  }

  async findById(id: string) {
    try {
      const objectId = new ObjectId(id);
      const review = await this.reviewRepository.findOne({
        where: { _id: objectId },
      });

      if (!review) {
        throw new NotFoundException(`Review with id ${id} not found`);
      }

      return review;
    } catch (error) {
      throw new NotFoundException(`Review with id ${id} not found`);
    }
  }

  async findByUserId(id: string) {
    try {
      const review = await this.reviewRepository.find({
        where: { userId: id },
      });

      if (!review) {
        throw new NotFoundException(`Review with productId ${id} not found`);
      }

      return review;
    } catch (error) {
      throw new NotFoundException(`Review with productId ${id} not found`);
    }
  }

  async findByProductId(id: string) {
    try {
      const review = await this.reviewRepository.find({
        where: { productId: id },
      });

      if (!review) {
        throw new NotFoundException(`Review with productId ${id} not found`);
      }

      return review;
    } catch (error) {
      throw new NotFoundException(`Review with productId ${id} not found`);
    }
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    const review = await this.findById(id);

    if (!review) {
      throw new NotFoundException(`Review with id ${id} not found`);
    }

    Object.assign(review, updateReviewDto);

    review.updateTimestamps();

    return this.reviewRepository.save(review);
  }

  async remove(id: string) {    
    return this.reviewRepository.delete(id);
  }
}
