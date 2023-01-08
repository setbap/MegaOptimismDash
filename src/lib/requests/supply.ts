import { ReturnDataType } from "lib/types/base";
import { SupplyOPHolders1TopOPHolders, SupplyOPHolders2DistributionOfOPHolders, SupplySingleNumber } from "lib/types/types/supply";

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

export const getSupplyInfo = async (): Promise<ReturnDataType<SupplySingleNumber>> => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/optimism?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false');
  const data = await response.json();
  const totalSupply: number = data.market_data.total_supply;
  const circulatingSupply: number = data.market_data.circulating_supply;
  const circulationSupplyRatio: number = (circulatingSupply / totalSupply) * 100;
  return {
    data: {
      totalSupply,
      circulatingSupply,
      circulationSupplyRatio
    },
    key: 'https://www.coingecko.com/en/coins/optimism',
    title: 'Total Supply,Circulating Supply,Ratio of Circulation Supply from Total Supply(%)'
  };
}

