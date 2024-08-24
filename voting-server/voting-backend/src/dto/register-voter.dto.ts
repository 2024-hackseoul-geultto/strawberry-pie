import { Type, Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsEmail,
  ValidateNested,
  IsArray,
} from 'class-validator';

// 개별 투표자를 나타내는 DTO
export class RegisterVoterDto {
  @Expose()
  @IsNotEmpty()
  name: string;

  @Expose()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

// 투표자 배열을 나타내는 DTO
export class RegisterVotersDto {
  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RegisterVoterDto)
  voters: RegisterVoterDto[];

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  voteId;
}
