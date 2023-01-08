import { DevelopmentMostUsedContracts, DevelopmentWeeklyActiveContract, DevelopmentWeeklyNewContract, DevelopmentMostUniqueUser } from "lib/types/types/development";
import {
  getSimpleArrayData,
  getSimpleInfo,
} from "./utils";

export const getDevelopmentMostUsedContracts = () =>
  getSimpleArrayData<
    DevelopmentMostUsedContracts,
    DevelopmentMostUsedContracts
  >(
    "21ac76ca-c611-472d-9b23-6dd9d4e3d746",
    "Share of each Contract in total transactions,Total number of transactions done by each contract",
    'Count'
  );

export const getDevelopmentTotalNumberOfContracts = () =>
  getSimpleInfo<any>(
    "2c2f3211-8e49-4385-868f-b750015c4568",
    "Total number of contracts deployed"
  );

export const getDevelopmentWeeklyActiveContract = () =>
  getSimpleArrayData<
    DevelopmentWeeklyActiveContract,
    DevelopmentWeeklyActiveContract
  >(
    "8d17d457-f02f-43be-ba69-4f07dda32ed5",
    "Weekly number of active contracts"
  );

export const getDevelopmentWeeklyNewContracts = () =>
  getSimpleArrayData<
    DevelopmentWeeklyNewContract,
    DevelopmentWeeklyNewContract
  >(
    "8bebea3d-dfb3-427d-af9a-f7b25897c667",
    "Cumulative number of new contracts,Weekly number of new contracts"
  );

export const getDevelopmentMostUniqueUser = () =>
  getSimpleArrayData<DevelopmentMostUniqueUser, DevelopmentMostUniqueUser>(
    "ef1e3bf8-6022-4294-a7aa-7ffa44b629ff",
    "Total number of unique users interacting with each contract,Share of each contract in total unique users",
    'Unique user'
  );
