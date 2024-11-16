import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { DeliveryInfoService } from "./delivery-info.service";
import { CreateDeliveryInfoDto } from "./dto/create-delivery-info.dto";

@Controller("delivery-info")
export class DeliveryInfoController {
  constructor(private readonly deliveryInfoService: DeliveryInfoService) {}

  @Post()
  async create(@Body() createDeliveryInfoDto: CreateDeliveryInfoDto) {
    return this.deliveryInfoService.create(createDeliveryInfoDto);
  }

  @Get(":id")
  async findByDeliveryId(@Param("id") id: string) {
    return this.deliveryInfoService.findByDeliveryId(id);
  }

  // @Get()
  // async findAll() {
  //   return this.orderService.findAll();
  // }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //   return this.orderService.update(id, updateOrderDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return this.orderService.remove(id);
  // }
}
