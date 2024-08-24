import { Injectable } from '@nestjs/common';
import { checkTaskInfoForEVM, verifyEVMMessageSignature } from './helper';
import TransgateConnect from '@zkpass/transgate-js-sdk';
import Web3 from 'web3';


@Injectable()
export class ZkpassService {
  async getSchemas(){

  }

  verify(validatorAddress: string, schemaId: string, taskId: string){
    try {
      const taskId = ''
      const appid = ''
      // const schemaId = ''
      // const validatorAddress = ''
      const allocateSignature = ''
      return checkTaskInfoForEVM(Web3.utils.stringToHex(taskId), Web3.utils.stringToHex(schemaId), validatorAddress, allocateSignature)
    } catch (err) {
      alert(JSON.stringify(err));
      console.log('error', err);
    }
  };
}