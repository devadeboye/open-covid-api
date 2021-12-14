import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CronController } from './controllers/cron.controller';
import { CronService } from './services/cron.service';

// @Global()
@Module({
  controllers: [CronController],
  providers: [CronService],
  exports: [CronService],
  imports: [],
})
export class CronModule {}
