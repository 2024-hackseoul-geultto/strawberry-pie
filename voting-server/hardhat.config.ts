import '@nomiclabs/hardhat-ethers';
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@typechain/hardhat'; // TypeChain 플러그인

const config: HardhatUserConfig = {
  solidity: '0.8.24',
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5', // ethers.js를 위한 타입 생성
  },
};

export default config;
