// src/controllers/state.controller.ts
import { Controller, Get } from '@nestjs/common';
import { StateService } from 'src/services/state.service';

@Controller('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  // Endpoint to fetch all states
  @Get()
  async getStates() {
    return this.stateService.getAllStates();
  }
}
