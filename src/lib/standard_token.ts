// tslint:disable

// import { Tx, TransactionReceipt, Log } from "web3/types";
import { BN } from "bn.js";

type Tx = any;
type TransactionReceipt = any;
type Log = any;

type BigNumber = BN | string;

export interface Transaction { receipt: TransactionReceipt; tx: string; logs: Log[]; }

export interface StandardTokenContract {
    address: string;

    // Read methods
    totalSupply(options?: Tx): Promise<BigNumber>;
    balanceOf(_owner: string, options?: Tx): Promise<BigNumber>;
    allowance(_owner: string, _spender: string, options?: Tx): Promise<BigNumber>;

    // Write methods
    transfer(_to: string, _value: BigNumber, options?: Tx): Promise<Transaction>;
    transferFrom(_from: string, _to: string, _value: BigNumber, options?: Tx): Promise<Transaction>;
    approve(_spender: string, _value: BigNumber, options?: Tx): Promise<Transaction>;
    increaseApproval(_spender: string, _addedValue: BigNumber, options?: Tx): Promise<Transaction>;
    decreaseApproval(_spender: string, _subtractedValue: BigNumber, options?: Tx): Promise<Transaction>;
}
// tslint:enable
