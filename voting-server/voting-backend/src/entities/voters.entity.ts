import {
  //   AfterInsert,
  //   AfterLoad,
  //   AfterUpdate,
  //   BeforeInsert,
  //   BeforeUpdate,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { decrypt, encrypt } from '../common/encryption';
// import { maskData, MASKING_TYPE } from '../common/masking/masking';
// import { MaskColumn } from '../common/decorators';
import { Maskable } from './maskable';
// import * as assert from 'assert';
// import { CustomHttpException, ERROR_CODE } from '../common/exceptions';

@Entity('voters')
@Index(['voterId'], { unique: true })
export class VoterEntity extends Maskable {
  @PrimaryGeneratedColumn()
  voterId: number;

  @Column('varchar', { nullable: false, length: 300, comment: '이메일' })
  email: string;

  //   @Column('varchar', { nullable: false, length: 100, comment: '비밀번호' })
  //   password: string;

  //   @MaskColumn(MASKING_TYPE.NAME)
  @Column('varchar', { nullable: false, length: 100, comment: '이름' })
  name: string;

  //   @MaskColumn(MASKING_TYPE.PHONE)
  //   @Column('varchar', { nullable: false, length: 200, comment: '연락처' })
  //   phone: string;

  //   @Column('boolean', {
  //     nullable: false,
  //     default: false,
  //     comment: '이메일 인증 여부',
  //   })
  //   isVerified: boolean;

  @CreateDateColumn({
    type: 'timestamptz',
    comment: '생성 일시',
  })
  createdAt: Date; // TODO: timestamp number 리턴

  @UpdateDateColumn({
    type: 'timestamptz',
    comment: '수정 일시',
  })
  updatedAt: Date; // TODO: timestamp number 리턴

  @DeleteDateColumn({
    type: 'timestamptz',
    comment: '삭제 일시',
  })
  deletedAt: Date; // TODO: timestamp number 리턴

  //   @BeforeInsert()
  //   @BeforeUpdate()
  //   handleBeforeInsert() {
  //     this.email = encrypt(this.email);
  //     this.name = encrypt(this.name);
  //     this.phone = encrypt(this.phone);
  //   }

  //   @AfterInsert()
  //   @AfterLoad()
  //   @AfterUpdate()
  //   handleAfterLoad() {
  //     this.email = decrypt(this.email);
  //     this.name = decrypt(this.name);
  //     this.phone = decrypt(this.phone);
  //     maskData(this);
  //   }
}
