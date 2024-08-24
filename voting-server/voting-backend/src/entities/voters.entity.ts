import {
  AfterInsert,
  AfterLoad,
  AfterUpdate,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { decrypt, encrypt } from '../common/encryption';
import { USER_STATUS } from '../constants';
import { UserDevUserEntity } from './user-dev-user.entity';
import { maskData, MASKING_TYPE } from '../common/masking/masking';
import { MaskColumn } from '../common/decorators';
import { Maskable } from './maskable';
import { UserGroupEntity } from './user-group.entity';
import * as assert from 'assert';
import { CustomHttpException, ERROR_CODE } from '../common/exceptions';
import { InviteInfoEntity } from './invite-info.entity';

@Entity('voters')
@Index(['voterId'], { unique: true })
export class UserEntity extends Maskable {
  @PrimaryGeneratedColumn()
  voterId: number;

  @Column('varchar', { nullable: false, length: 300, comment: '이메일' })
  email: string;

//   @Column('varchar', { nullable: false, length: 100, comment: '비밀번호' })
//   password: string;

  @MaskColumn(MASKING_TYPE.NAME)
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

  @Column('boolean', {
    nullable: false,
    default: false,
    comment: '관리자 계정 여부',
  })
  isMaster: boolean;

  // TODO. user_groups 테이블 데이터 마이그레이션 후 제거
  @Column('boolean', {
    nullable: false,
    default: false,
    comment: '운영 오픈 승인 여부',
  })
  isProductionApproved: boolean;

  // TODO. user_groups 테이블 데이터 마이그레이션 후 제거
  @Column('boolean', {
    nullable: false,
    default: false,
    comment: '운영 오픈 요청',
  })
  isDemandProductionOpen: boolean;

  @Column('boolean', {
    nullable: false,
    default: false,
    comment: '개인정보 수집 동의 여부',
  })
  privacyPolicyAgreement: boolean;

  @Column('boolean', {
    nullable: false,
    default: false,
    comment: '임시 비밀번호 여부',
  })
  isTemporaryPassword: boolean;

  @Column('int', { comment: '로그인 실패 횟수', nullable: false, default: 0 })
  failedLoginCount: number;

  @Column('timestamptz', { nullable: true, comment: '마지막 로그인 일시' })
  lastLoggedInAt: Date; // TODO: timestamp number 리턴

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

  // TODO. user_groups 테이블 데이터 마이그레이션 후 제거
  @OneToOne(() => UserDevUserEntity, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({
    name: 'userId',
  })
  userDevUser: UserDevUserEntity;

  // TODO. user_groups 테이블 데이터 마이그레이션 후 NOT NULL로 마이그레이션
  @JoinColumn({ name: 'userGroupId' })
  @ManyToOne(() => UserGroupEntity, { cascade: ['insert'] })
  userGroup: UserGroupEntity;

  @OneToOne(
    () => InviteInfoEntity,
    (InviteInfoEntity) => InviteInfoEntity.user,
    { cascade: ['update'] },
  )
  inviteInfo: InviteInfoEntity;

  // TODO. 사이드 이펙트 조사 후 private으로 수정
  constructor(partial: Partial<UserEntity>) {
    super();
    Object.assign(this, partial);
  }

  @BeforeInsert()
  @BeforeUpdate()
  handleBeforeInsert() {
    this.email = encrypt(this.email);
    this.name = encrypt(this.name);
    this.phone = encrypt(this.phone);
  }

  @AfterInsert()
  @AfterLoad()
  @AfterUpdate()
  handleAfterLoad() {
    this.email = decrypt(this.email);
    this.name = decrypt(this.name);
    this.phone = decrypt(this.phone);
    maskData(this);
  }

  static createForSignup({
    email,
    name,
    phone,
    password,
    privacyPolicyAgreement,
  }: {
    email: string;
    name: string;
    phone: string;
    password: string;
    privacyPolicyAgreement: boolean;
  }): UserEntity {
    assert(
      privacyPolicyAgreement === true,
      'privacyPolicyAgreement must be true',
    );

    return new UserEntity({
      email,
      name,
      phone,
      password,
      privacyPolicyAgreement,
      userGroup: UserGroupEntity.createForSignup(),
    });
  }

  }
}
