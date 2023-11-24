import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get('/:id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    // if (isNaN(+id)) {
    //   return 'ID should be a number';
    // }
    console.log({ id });
    throw new Error('This is a new error');
    return this.carsService.findOneById(+id);
  }
}
