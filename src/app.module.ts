import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CovidModule } from './covid/covid.module';

@Module({
  imports: [CovidModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
