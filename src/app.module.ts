import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EtheriumModule } from './etherium/etherium.module';

@Module({
  imports: [EtheriumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
