import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller('review')
export class ReviewController {
  constructor(private readonly productService: ReviewService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.productService.create(createReviewDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Get('product/:id')
  findByProductId(@Param('id') id: string) {
    return this.productService.findByProductId(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.productService.update(id, updateReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
