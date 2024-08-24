import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ZkpassService } from './zkpass/zkpass.service';

@Injectable()
export class HttpServiceInterceptor implements NestInterceptor {
  constructor(private zkpassService: ZkpassService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    // ** if you use normal HTTP module **
    const ctx = context.switchToHttp();
    const token:string = ctx.getRequest().headers['authorization']; // validatorAddress
    const verifyToken = token.split(';')
    this.zkpassService.verify(verifyToken[0], verifyToken[1], verifyToken[2])

    return next.handle().pipe();
  }
}