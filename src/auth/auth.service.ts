import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './auth.dto';

@Injectable()
export class AuthService {

  validateUser(payload: AuthPayloadDto) {
    
  }
}
