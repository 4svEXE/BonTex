import { Module } from '@nestjs/common';
import {  QuickOrderService } from './quick-order.service';
import {  QuickOrderController } from './quick-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  QuickOrderEntity } from './entities/quick-order.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ QuickOrderEntity])],
  controllers: [ QuickOrderController],
  providers: [ QuickOrderService],
  exports: [ QuickOrderService]
})
export class  QuickOrderModule {}
