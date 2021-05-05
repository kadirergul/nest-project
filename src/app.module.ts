import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NudesController } from './mycontroller/nudes.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, NudesController, CatsController],
  providers: [AppService],
})
export class AppModule {}
