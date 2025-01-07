import { Controller, Get } from '@nestjs/common';
import { StateService } from 'src/services/state.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { State } from 'src/entities/state.entity';

@ApiTags('States')  // Swagger tag for grouping states
@Controller('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all states',  // Operation summary
  })
  @ApiResponse({
    status: 200,
    description: 'List of all states retrieved successfully',
    type: [State],  // Returning an array of State
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })  // Internal server error response
  async getStates() {
    return this.stateService.getAllStates();
  }
}
