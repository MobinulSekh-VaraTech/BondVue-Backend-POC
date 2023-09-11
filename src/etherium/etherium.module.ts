import { Module } from '@nestjs/common';
import { EtheriumService } from './etherium.service';
import { EtheriumController } from './etherium.controller';

@Module({
  providers: [EtheriumService],
  controllers: [EtheriumController]
})
export class EtheriumModule {}
