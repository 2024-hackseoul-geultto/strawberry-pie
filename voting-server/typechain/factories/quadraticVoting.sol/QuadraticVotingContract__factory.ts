/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  QuadraticVotingContract,
  QuadraticVotingContractInterface,
} from "../../quadraticVoting.sol/QuadraticVotingContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "TOTAL_CREDITS",
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
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "credit",
        type: "uint256",
      },
    ],
    name: "registerVoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "voteCount",
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
        internalType: "uint256",
        name: "credit",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "votes",
    outputs: [
      {
        internalType: "bool",
        name: "votingEnded",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506106b8806100606000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80635df8133014610067578063a3ec138d14610097578063b8cb490f146100c8578063c6384071146100e6578063cbea81ef14610104578063f851a44014610120575b600080fd5b610081600480360381019061007c91906103c8565b61013e565b60405161008e9190610410565b60405180910390f35b6100b160048036038101906100ac9190610489565b610169565b6040516100bf9291906104c5565b60405180910390f35b6100d061019a565b6040516100dd91906104ee565b60405180910390f35b6100ee61019f565b6040516100fb91906104ee565b60405180910390f35b61011e60048036038101906101199190610509565b6101a5565b005b610128610369565b6040516101359190610558565b60405180910390f35b60026020528060005260406000206000915090508060010160009054906101000a900460ff16905081565b60036020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b606481565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610233576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022a906105f6565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16156102c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ba90610662565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff02191690831515021790555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080fd5b6000819050919050565b6103a581610392565b81146103b057600080fd5b50565b6000813590506103c28161039c565b92915050565b6000602082840312156103de576103dd61038d565b5b60006103ec848285016103b3565b91505092915050565b60008115159050919050565b61040a816103f5565b82525050565b60006020820190506104256000830184610401565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104568261042b565b9050919050565b6104668161044b565b811461047157600080fd5b50565b6000813590506104838161045d565b92915050565b60006020828403121561049f5761049e61038d565b5b60006104ad84828501610474565b91505092915050565b6104bf81610392565b82525050565b60006040820190506104da60008301856104b6565b6104e76020830184610401565b9392505050565b600060208201905061050360008301846104b6565b92915050565b600080604083850312156105205761051f61038d565b5b600061052e85828601610474565b925050602061053f858286016103b3565b9150509250929050565b6105528161044b565b82525050565b600060208201905061056d6000830184610549565b92915050565b600082825260208201905092915050565b7f4f6e6c792061646d696e2063616e2063616c6c20746869732066756e6374696f60008201527f6e2e000000000000000000000000000000000000000000000000000000000000602082015250565b60006105e0602283610573565b91506105eb82610584565b604082019050919050565b6000602082019050818103600083015261060f816105d3565b9050919050565b7f566f74657220697320616c726561647920726567697374657265642e00000000600082015250565b600061064c601c83610573565b915061065782610616565b602082019050919050565b6000602082019050818103600083015261067b8161063f565b905091905056fea26469706673582212209f3d417ada700bf28383936be9790958d5998d8cf9cf0db62bd4335f9dbbdd4d64736f6c63430008180033";

type QuadraticVotingContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: QuadraticVotingContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class QuadraticVotingContract__factory extends ContractFactory {
  constructor(...args: QuadraticVotingContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<QuadraticVotingContract> {
    return super.deploy(overrides || {}) as Promise<QuadraticVotingContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): QuadraticVotingContract {
    return super.attach(address) as QuadraticVotingContract;
  }
  override connect(signer: Signer): QuadraticVotingContract__factory {
    return super.connect(signer) as QuadraticVotingContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QuadraticVotingContractInterface {
    return new utils.Interface(_abi) as QuadraticVotingContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): QuadraticVotingContract {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as QuadraticVotingContract;
  }
}