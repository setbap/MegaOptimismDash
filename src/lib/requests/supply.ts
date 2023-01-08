import { SupplyOPHolders1TopOPHolders, SupplyOPHolders2DistributionOfOPHolders } from "lib/types/types/supply";

import { getSimpleArrayData } from "./utils";


export const getSupplyOPHolders2DistributionOfOPHolders = () =>
  getSimpleArrayData<SupplyOPHolders2DistributionOfOPHolders, SupplyOPHolders2DistributionOfOPHolders>(
    "2aba40d6-63c9-4d87-b8de-463ec37a48ba",
    "Distribution of OP holders",
  );

export const getSupplyOPHolders1TopOPHolders = () =>
  getSimpleArrayData<SupplyOPHolders1TopOPHolders, SupplyOPHolders1TopOPHolders>(
    "d4bcdf3d-b4e8-4f6c-bd8a-d82a25b2302c",
    "Top OP holders",
  );
