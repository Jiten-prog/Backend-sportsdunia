import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from '../entities/state.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger'; // Import Swagger decorators

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>,
  ) {}

  // Fetch all states from the database
  @ApiOperation({
    summary: 'Get all states',
    description: 'Fetches a list of all states from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'States retrieved successfully.',
    type: [State], // Return type is an array of State entities
  })
  async getAllStates() {
    return this.stateRepository.find();
  }
}
