import { Controller, Get } from '@nestjs/common';

@Controller('api')  // This handles the /api route
export class ApiController {

  @Get()
  getApiStatus(): string {
    return 'API is working!';
  }
}
