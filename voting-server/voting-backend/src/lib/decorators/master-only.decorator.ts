import { SetMetadata } from '@nestjs/common';
import { METADATA_KEYS } from '../constant';

export const MasterOnly = () => SetMetadata(METADATA_KEYS.MASTER_ONLY, true);
