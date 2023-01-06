import { ReturnDataType } from "lib/types/base";
import { DeFi1TotalSingleNumber, DeFi2DailySingleNumber, DeFi3TodayChanges, DeFi4SwappingOverTime, DeFi5TopSwappingFromAssetsTransactions, DeFi5TopSwappingFromAssetsUniqueSwappers, DeFi5TopSwappingFromAssetsVolume, DeFi6TopSwappingToAssetsTransactions, DeFi6TopSwappingToAssetsUniqueSwappers, DeFi6TopSwappingToAssetsVolume, DeFi7TopSwappingPairsTransactions, DeFi7TopSwappingPairsUniqueSwappers, DeFi7TopSwappingPairsVolume, DeFi8WeeklyTop10SwappingPairsTransactions, DeFi8WeeklyTop10SwappingPairsUniqueSwappers, DeFi8WeeklyTop10SwappingPairsVolume, DeFi9DEXsComparison } from "lib/types/types/defi";

import {
  getSimpleArrayData,
  getSimpleInfo,
  pivotData,
} from "./utils";

export const getDeFi1TotalSingleNumber = () =>
  getSimpleInfo<DeFi1TotalSingleNumber>(
    "458b779d-0a7e-4e82-b48e-f3808fb1ad73",
    "Total Swap Transactions,Total Unique Swappers,Total Swap Volume(in USD)"
  );

export const getDeFi2DailySingleNumber = () =>
  getSimpleInfo<DeFi2DailySingleNumber>(
    "5d96ebe6-69a0-4b24-9abc-b9d790535123",
    "Daily Swap size(in USD),Daily Unique Swappers,Daily Swap Volume(in USD),Daily Swap Transactions"
  );

export const getDeFi3TodayChanges = () =>
  getSimpleInfo<DeFi3TodayChanges>(
    "2489a1e6-1341-4a73-b458-6869e79d9eee",
    "24h Swap Count,24h Unique Swapper,24h Volume (in USD)"
  );


export const getDeFi4SwappingOverTime = () =>
  getSimpleArrayData<
    DeFi4SwappingOverTime,
    DeFi4SwappingOverTime
  >(
    "2849e20c-eafa-49d0-9aa3-d424545ec4d1",
    "Weekly average swap size(in USD),Cumulative volume of swap transactions(in USD),Cumulative number of swap transactions,Weekly number of unique swappers,Weekly volume of swap transactions,Weekly number of swap transactions"
  );


export const getDeFi5TopSwappingFromAssetsTransactions = () =>
  getSimpleArrayData<
    DeFi5TopSwappingFromAssetsTransactions,
    DeFi5TopSwappingFromAssetsTransactions
  >(
    "ba7e08fd-8145-451d-90ff-c325de9e49a5",
    "Top swapping from assets based on transactions"
  );


export const getDeFi5TopSwappingFromAssetsUniqueSwappers = () =>
  getSimpleArrayData<
    DeFi5TopSwappingFromAssetsUniqueSwappers,
    DeFi5TopSwappingFromAssetsUniqueSwappers
  >(
    "f725a716-f47c-4767-9f5e-44e822afd77d",
    "Top swapping from assets based on unique swappers"
  );


export const getDeFi5TopSwappingFromAssetsVolume = () =>
  getSimpleArrayData<
    DeFi5TopSwappingFromAssetsVolume,
    DeFi5TopSwappingFromAssetsVolume
  >(
    "444557c1-f6ec-4820-9bde-98f2bc826bda",
    "Top swapping from assets based on volume"
  );

export const getDeFi6TopSwappingToAssetsTransactions = () =>
  getSimpleArrayData<
    DeFi6TopSwappingToAssetsTransactions,
    DeFi6TopSwappingToAssetsTransactions
  >(
    "341ce4ce-ca9b-42fb-9842-a1adf4766bbb",
    "Top swapping to assets based on transactions"
  );


export const getDeFi6TopSwappingToAssetsUniqueSwappers = () =>
  getSimpleArrayData<
    DeFi6TopSwappingToAssetsUniqueSwappers,
    DeFi6TopSwappingToAssetsUniqueSwappers
  >(
    "e6732049-d204-41ed-adda-05daed4058ed",
    "Top swapping to assets based on unique swappers"
  );


export const getDeFi6TopSwappingToAssetsVolume = () =>
  getSimpleArrayData<
    DeFi6TopSwappingToAssetsVolume,
    DeFi6TopSwappingToAssetsVolume
  >(
    "04ef617f-be6a-4379-b0d3-28dd0728d0ec",
    "Top swapping to assets based on volume"
  );


export const getDeFi7TopSwappingPairsTransactions = () =>
  getSimpleArrayData<
    DeFi7TopSwappingPairsTransactions,
    DeFi7TopSwappingPairsTransactions
  >(
    "8c4cc618-3c13-40ba-8ab4-16824c91c8cc",
    "Top swapping pairs based on transactions"
  );


export const getDeFi7TopSwappingPairsUniqueSwappers = () =>
  getSimpleArrayData<
    DeFi7TopSwappingPairsUniqueSwappers,
    DeFi7TopSwappingPairsUniqueSwappers
  >(
    "a5f6a283-7391-4bfb-8745-8e683c754c78",
    "Top swapping pairs based on unique swappers"
  );


export const getDeFi7TopSwappingPairsVolume = () =>
  getSimpleArrayData<
    DeFi7TopSwappingPairsVolume,
    DeFi7TopSwappingPairsVolume
  >(
    "a3ebe35e-3185-4906-9dc1-92c62ac015a0",
    "Top swapping pairs based on volume"
  );


export const _getDeFi8WeeklyTop10SwappingPairsTransactions = () =>
  getSimpleArrayData<
    DeFi8WeeklyTop10SwappingPairsTransactions,
    DeFi8WeeklyTop10SwappingPairsTransactions
  >(
    "76b6e4d2-4665-486d-b1b1-5ef32235e8e4",
    "Weekly top 10 swapping pairs based on transactions"
  );

export const getDeFi8WeeklyTop10SwappingPairsTransactions: () => Promise<
  ReturnDataType<any>
> = async () => {
  const rawData = await _getDeFi8WeeklyTop10SwappingPairsTransactions();

  const pairs = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Pair"];
      })
    )
  );
  const swapCount = pivotData(
    rawData.data,
    "Day",
    "Pair",
    "Swap Count",
    pairs,
    0
  );

  return {
    data: {
      swapCount,
      pairs,
    },
    key: rawData.key,
    title: rawData.title,
  };
};


export const _getDeFi8WeeklyTop10SwappingPairsUniqueSwappers = () =>
  getSimpleArrayData<
    DeFi8WeeklyTop10SwappingPairsUniqueSwappers,
    DeFi8WeeklyTop10SwappingPairsUniqueSwappers
  >(
    "51423254-ea43-443c-88d3-3c07bc914ecf",
    "Weekly top 10 swapping pairs based on unique swappers"
  );
export const getDeFi8WeeklyTop10SwappingPairsUniqueSwappers: () => Promise<
  ReturnDataType<any>
> = async () => {
  const rawData = await _getDeFi8WeeklyTop10SwappingPairsUniqueSwappers();

  const pairs = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Pair"];
      })
    )
  );
  const uniqueSwapper = pivotData(
    rawData.data,
    "Day",
    "Pair",
    "Unique Swapper",
    pairs,
    0
  );

  return {
    data: {
      uniqueSwapper,
      pairs,
    },
    key: rawData.key,
    title: rawData.title,
  };
};

export const _getDeFi8WeeklyTop10SwappingPairsVolume = () =>
  getSimpleArrayData<
    DeFi8WeeklyTop10SwappingPairsVolume,
    DeFi8WeeklyTop10SwappingPairsVolume
  >(
    "642005ef-bab2-49b3-8a93-4843848444b5",
    "Weekly top 10 swapping pairs based on volume"
  );
export const getDeFi8WeeklyTop10SwappingPairsVolume: () => Promise<
  ReturnDataType<any>
> = async () => {
  const rawData = await _getDeFi8WeeklyTop10SwappingPairsVolume();

  const pairs = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Pair"];
      })
    )
  );
  const volume = pivotData(
    rawData.data,
    "Day",
    "Pair",
    "Volume",
    pairs,
    0
  );

  return {
    data: {
      volume,
      pairs,
    },
    key: rawData.key,
    title: rawData.title,
  };
};


export const getDeFi9DEXsComparison = () =>
  getSimpleArrayData<
    DeFi9DEXsComparison,
    DeFi9DEXsComparison
  >(
    "68a54938-b020-4a5c-b730-dcdb8b8d6054",
    "DEXs share in number of transactions,DEXs share in volume of transactions,DEXs share in unique user of transactions"
  );