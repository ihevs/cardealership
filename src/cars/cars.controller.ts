import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCardDto } from './dto/create-dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get('/:id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '5' })) id: string) {
    // if (isNaN(+id)) {
    //   return 'ID should be a number';
    // }
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCardDto: CreateCardDto) {
    return createCardDto;
  }

  @Patch(':id')
  updateCar(@Param('id') id: string, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id') id: number) {
    return { method: 'DELETE', id };
  }
}
