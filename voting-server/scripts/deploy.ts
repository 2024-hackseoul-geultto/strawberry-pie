import { ethers } from 'hardhat';

async function main() {
  // Hardhat에서 기본 제공하는 signer 가져오기 (배포할 계정)
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  // const wallet = await ethers.Wallet.createRandom();
  // // 배포자의 잔고 확인
  // const balance = await deployer.getBalance(wallet.address); // 여기는 수정 필요 없음
  // const balance = await deployer.getBalance(deployer.address);
  // console.log('Account balance:', balance.toString());

  // 스마트 컨트랙트 가져오기 (컴파일된 후 생성된 artifact 파일을 통해)
  const QuadraticVotingContract = await ethers.getContractFactory(
    'QuadraticVotingContract',
  );

  // 스마트 컨트랙트 배포 (생성자 인자 포함 시, `deploy(arg1, arg2)` 형태로 전달)
  const contract = await QuadraticVotingContract.deploy();

  // 배포 완료 대기
  // await contract.deployed();

  // 배포된 컨트랙트의 주소 출력
  // console.log('QuadraticVotingContract deployed to:', contract.address);
  console.log('QuadraticVotingContract deployed to:', contract);
}

// Hardhat은 async/await를 지원하지 않는 메인 함수에서 오류를 포착하기 위해 이 패턴을 사용합니다.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
