import {
  TransactionsAVGInfo,
  TransactionsBlockAge,
  TransactionsFee,
  TransactionsNewWallet,
  TransactionsTodayInfo,
  TransactionsTotalInfo,
  TransactionsTPS,
  TransactionsTXInfo,
} from "lib/types/types/transaction";
import { getSimpleArrayData, getSimpleInfo } from "./utils";

export const getTransactionsAVGInfo = () =>
  getSimpleInfo<TransactionsAVGInfo>(
    "c58b29cf-63da-4703-97e9-fd1aaa37381f",
    "Daily active wallets,Daily fee (in USD) collected,Transactions fee (in USD),Daily transactions,Transaction success rate"
  );

export const getTransactionsTotalInfo = () =>
  getSimpleInfo<TransactionsTotalInfo>(
    "8436457f-eb15-40f3-8111-c7c5f4c649aa",
    "Total fee (in USD) collected,Total wallets,Total transactions"
  );

export const getTransactionsTPS = () =>
  getSimpleArrayData<TransactionsTPS, TransactionsTPS>(
    "8063c847-d121-4e26-b6e1-48d072dcebcd",
    "Number of transactions per second (TPS),Number of transactions per second (TPS)",
    "Day"
  );

// ✅
export const getTransactionsFee = () =>
  getSimpleArrayData<TransactionsFee, TransactionsFee>(
    "912ea103-48e4-407c-b9c5-98afb0095b9c",
    "Weekly average transaction fee (in USD),Weekly total fee(in USD)",
    "Day"
  );

export const getTransactionsBlockAge = () =>
  getSimpleArrayData<TransactionsBlockAge, TransactionsBlockAge>(
    "bc13cb44-f1d4-4988-89ff-f3e3c2987178",
    "Weekly number of transactions per block,Weekly block time,Weekly block time,Number of transactions per block (TPB)",
    "Day"
  );

export const getTransactionsTXInfo = () =>
  getSimpleArrayData<TransactionsTXInfo, TransactionsTXInfo>(
    "d420c2c1-74a9-4a6e-94d7-adb2022d5784",
    " , ,Weekly number of active wallets,Weekly number of transactions,Cumulative number of transaction,Weekly transaction success rate",
    "Day"
  );

export const getTransactionsNewWallet = () =>
  getSimpleArrayData<TransactionsNewWallet, TransactionsNewWallet>(
    "4bac26dd-8621-4065-8277-9c7548fe10e1",
    "Weekly number of new wallets,Cumulative number of new wallets",
    "Day"
  );

// ✅
export const getTransactionsTodayInfo = () =>
  getSimpleInfo<TransactionsTodayInfo>(
    "2621ab7c-97c9-4286-80aa-1545eb918c08",
    "24H Transactions Count,24H Active Wallets,24H  TX Fee,24H Success Rate"
  );
