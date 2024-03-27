import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';

@Module({
  providers: [BasketService],
  controllers: [BasketController]
})
export class BasketModule {}
