import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { QuickOrderService } from './quick-order.service';
import { CreateQuickOrderDto } from './dto/create-quick-order.dto';
import { UpdateQuickOrderDto } from './dto/update-quick-order.dto';

@Controller('quick-order')
export class QuickOrderController {
  constructor(private readonly quickOrderService: QuickOrderService) {}

  @Post()
  create(@Body() createQuickOrderDto: CreateQuickOrderDto) {
    return this.quickOrderService.create(createQuickOrderDto);
  }

  @Get()
  findAll() {
    return this.quickOrderService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.quickOrderService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuickOrderDto: UpdateQuickOrderDto) {
    return this.quickOrderService.update(id, updateQuickOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quickOrderService.remove(id);
  }
}
