import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class PostResetPasswordRequestDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  newPassword: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  confirmNewPassword: string;
}

import { UserEntity } from '../../entities/user.entity';

export class UserDetail {
  userId: number;
  email: string;
  name: string;
  phone: string;
  isVerified: boolean;
  isMaster: boolean;
  isProductionApproved: boolean;
  isDemandProductionOpen: boolean;
  lastLoggedInAt: number;
  createdAt: number;
  updatedAt: number;

  constructor(user: UserEntity) {
    this.userId = user.userId;
    this.email = user.email;
    this.name = user.name;
    this.phone = user.phone;
    this.isVerified = user.isVerified;
    this.isMaster = user.isMaster;
    this.isProductionApproved = user.isProductionApproved;
    this.isDemandProductionOpen = user.isDemandProductionOpen;
    this.lastLoggedInAt = Number(user.lastLoggedInAt);
    this.createdAt = Number(user.createdAt);
    this.updatedAt = Number(user.updatedAt);
  }
}
