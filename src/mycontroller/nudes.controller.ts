import { Controller, Get } from '@nestjs/common';

@Controller('nudes')
export class NudesController {
    constructor(){}

  @Get()
  getMyText(): string {
    return "This action will return all my nudes!";
  }
}