/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VotingContract,
  VotingContractInterface,
} from "../../singleVoting.sol/VotingContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proposalNames",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endVoting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWinnerName",
    outputs: [
      {
        internalType: "bytes32",
        name: "winnerName",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWinningProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "winningProposalIndex",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "registerVoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalIndex",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "voters",
    outputs: [
      {
        internalType: "bool",
        name: "hasVoted",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "vote",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingEndTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingEnded",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620012d4380380620012d4833981810160405281019062000037919062000322565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060005b8251811015620001065760016040518060400160405280858481518110620000a757620000a662000388565b5b60200260200101518152602001600081525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505080806001019150506200007a565b508042620001159190620003e6565b600481905550505062000421565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000187826200013c565b810181811067ffffffffffffffff82111715620001a957620001a86200014d565b5b80604052505050565b6000620001be62000123565b9050620001cc82826200017c565b919050565b600067ffffffffffffffff821115620001ef57620001ee6200014d565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6200021a8162000205565b81146200022657600080fd5b50565b6000815190506200023a816200020f565b92915050565b6000620002576200025184620001d1565b620001b2565b905080838252602082019050602084028301858111156200027d576200027c62000200565b5b835b81811015620002aa578062000295888262000229565b8452602084019350506020810190506200027f565b5050509392505050565b600082601f830112620002cc57620002cb62000137565b5b8151620002de84826020860162000240565b91505092915050565b6000819050919050565b620002fc81620002e7565b81146200030857600080fd5b50565b6000815190506200031c81620002f1565b92915050565b600080604083850312156200033c576200033b6200012d565b5b600083015167ffffffffffffffff8111156200035d576200035c62000132565b5b6200036b85828601620002b4565b92505060206200037e858286016200030b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620003f382620002e7565b91506200040083620002e7565b92508282019050808211156200041b576200041a620003b7565b5b92915050565b610ea380620004316000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80639d5a0529116100665780639d5a052914610148578063a3ec138d14610166578063a513462014610198578063c3403ddf146101b6578063f851a440146101c05761009e565b80630121b93f146100a3578063013cf08b146100bf5780631ea736e0146100f05780632bfda5151461010e57806338db6dd31461012c575b600080fd5b6100bd60048036038101906100b8919061086e565b6101de565b005b6100d960048036038101906100d4919061086e565b6103c1565b6040516100e79291906108c3565b60405180910390f35b6100f86103f5565b60405161010591906108ec565b60405180910390f35b6101166103fb565b6040516101239190610907565b60405180910390f35b61014660048036038101906101419190610980565b61042f565b005b6101506105fb565b60405161015d91906109c8565b60405180910390f35b610180600480360381019061017b9190610980565b61060e565b60405161018f939291906109e3565b60405180910390f35b6101a0610652565b6040516101ad91906108ec565b60405180910390f35b6101be61071f565b005b6101c861080f565b6040516101d59190610a29565b60405180910390f35b600360009054906101000a900460ff161561022e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022590610aa1565b60405180910390fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060020160009054906101000a900460ff166102c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b990610b0d565b60405180910390fd5b8060000160009054906101000a900460ff1615610314576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030b90610b79565b60405180910390fd5b600180549050821061035b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035290610be5565b60405180910390fd5b60018160000160006101000a81548160ff021916908315150217905550818160010181905550600180838154811061039657610395610c05565b5b906000526020600020906002020160010160008282546103b69190610c63565b925050819055505050565b600181815481106103d157600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b60045481565b60006001610407610652565b8154811061041857610417610c05565b5b906000526020600020906002020160000154905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b490610d09565b60405180910390fd5b600360009054906101000a900460ff161561050d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050490610aa1565b60405180910390fd5b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff161561059d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059490610d75565b60405180910390fd5b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690831515021790555050565b600360009054906101000a900460ff1681565b60026020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020160009054906101000a900460ff16905083565b6000600360009054906101000a900460ff166106a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069a90610de1565b60405180910390fd5b6000805b60018054905081101561071a5781600182815481106106c9576106c8610c05565b5b906000526020600020906002020160010154111561070d57600181815481106106f5576106f4610c05565b5b90600052602060002090600202016001015491508092505b80806001019150506106a7565b505090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a490610d09565b60405180910390fd5b6004544210156107f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e990610e4d565b60405180910390fd5b6001600360006101000a81548160ff021916908315150217905550565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080fd5b6000819050919050565b61084b81610838565b811461085657600080fd5b50565b60008135905061086881610842565b92915050565b60006020828403121561088457610883610833565b5b600061089284828501610859565b91505092915050565b6000819050919050565b6108ae8161089b565b82525050565b6108bd81610838565b82525050565b60006040820190506108d860008301856108a5565b6108e560208301846108b4565b9392505050565b600060208201905061090160008301846108b4565b92915050565b600060208201905061091c60008301846108a5565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061094d82610922565b9050919050565b61095d81610942565b811461096857600080fd5b50565b60008135905061097a81610954565b92915050565b60006020828403121561099657610995610833565b5b60006109a48482850161096b565b91505092915050565b60008115159050919050565b6109c2816109ad565b82525050565b60006020820190506109dd60008301846109b9565b92915050565b60006060820190506109f860008301866109b9565b610a0560208301856108b4565b610a1260408301846109b9565b949350505050565b610a2381610942565b82525050565b6000602082019050610a3e6000830184610a1a565b92915050565b600082825260208201905092915050565b7f566f74696e672068617320656e6465642e000000000000000000000000000000600082015250565b6000610a8b601183610a44565b9150610a9682610a55565b602082019050919050565b60006020820190508181036000830152610aba81610a7e565b9050919050565b7f596f7520617265206e6f742061207265676973746572656420766f7465722e00600082015250565b6000610af7601f83610a44565b9150610b0282610ac1565b602082019050919050565b60006020820190508181036000830152610b2681610aea565b9050919050565b7f596f75206861766520616c726561647920766f7465642e000000000000000000600082015250565b6000610b63601783610a44565b9150610b6e82610b2d565b602082019050919050565b60006020820190508181036000830152610b9281610b56565b9050919050565b7f496e76616c69642070726f706f73616c2e000000000000000000000000000000600082015250565b6000610bcf601183610a44565b9150610bda82610b99565b602082019050919050565b60006020820190508181036000830152610bfe81610bc2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c6e82610838565b9150610c7983610838565b9250828201905080821115610c9157610c90610c34565b5b92915050565b7f4f6e6c792061646d696e2063616e2063616c6c20746869732066756e6374696f60008201527f6e2e000000000000000000000000000000000000000000000000000000000000602082015250565b6000610cf3602283610a44565b9150610cfe82610c97565b604082019050919050565b60006020820190508181036000830152610d2281610ce6565b9050919050565b7f566f74657220697320616c726561647920726567697374657265642e00000000600082015250565b6000610d5f601c83610a44565b9150610d6a82610d29565b602082019050919050565b60006020820190508181036000830152610d8e81610d52565b9050919050565b7f566f74696e67206973207374696c6c206163746976652e000000000000000000600082015250565b6000610dcb601783610a44565b9150610dd682610d95565b602082019050919050565b60006020820190508181036000830152610dfa81610dbe565b9050919050565b7f566f74696e6720706572696f6420686173206e6f7420656e646564207965742e600082015250565b6000610e37602083610a44565b9150610e4282610e01565b602082019050919050565b60006020820190508181036000830152610e6681610e2a565b905091905056fea26469706673582212209492e33d4fd098109a332560a14df3933ddc1c12400aa1d9f941ef036bd7c6f564736f6c63430008180033";

type VotingContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VotingContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VotingContract__factory extends ContractFactory {
  constructor(...args: VotingContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    proposalNames: BytesLike[],
    duration: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<VotingContract> {
    return super.deploy(
      proposalNames,
      duration,
      overrides || {}
    ) as Promise<VotingContract>;
  }
  override getDeployTransaction(
    proposalNames: BytesLike[],
    duration: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(proposalNames, duration, overrides || {});
  }
  override attach(address: string): VotingContract {
    return super.attach(address) as VotingContract;
  }
  override connect(signer: Signer): VotingContract__factory {
    return super.connect(signer) as VotingContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VotingContractInterface {
    return new utils.Interface(_abi) as VotingContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotingContract {
    return new Contract(address, _abi, signerOrProvider) as VotingContract;
  }
}
