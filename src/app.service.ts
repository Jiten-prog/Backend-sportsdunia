import { Injectable } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger'; // Import Swagger decorators

@Injectable()
export class AppService {
  @ApiOperation({
    summary: 'Get Hello message',
    description: 'This endpoint returns a simple "Hello World!" message.',
  })
  getHello(): string {
    return 'Hello World!';
  }
}
