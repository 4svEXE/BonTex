import { Module } from '@nestjs/common';
import { UserModule } from './entities/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './entities/auth/auth.module';
import { ProductModule } from './entities/product/product.module';

@Module({
  imports: [UserModule, ProductModule, ConfigModule.forRoot(), TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DB_URL,
      ssl: false,
      autoLoadEntities: true,
      synchronize: true, 
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
