// src/services/college.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { College } from '../entities/college.entity';
import { City } from '../entities/city.entity';
import { State } from '../entities/state.entity';

@Injectable()
export class CollegeService {
  constructor(
    @InjectRepository(College)
    private readonly collegeRepository: Repository<College>,

    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,

    @InjectRepository(State)
    private readonly stateRepository: Repository<State>,
  ) {}

  // Method to get colleges filtered by city_id and state_id
  async getCollegesByCityAndState(cityId: number, stateId: number) {
    const query = this.collegeRepository.createQueryBuilder('college')
      .leftJoinAndSelect('college.city', 'city')  // Join with City
      .leftJoinAndSelect('college.state', 'state');  // Join with State

    // If cityId is provided, filter by city_id
    if (cityId) {
      query.andWhere('college.cityId = :cityId', { cityId });
    }

    // If stateId is provided, filter by state_id
    if (stateId) {
      query.andWhere('college.stateId = :stateId', { stateId });
    }

    const colleges = await query.getMany();
    return colleges;
  }
}
