import { SetMetadata } from '@nestjs/common';
import { METADATA_KEYS } from '../constant';

export const Public = () => SetMetadata(METADATA_KEYS.IS_PUBLIC, true);
