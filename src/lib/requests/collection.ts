import { getCertainCollectioncurrentValueAndChangeRatherThanYesterdayQuery, getCertainCollectionDailySingleNumberQuery, getCertainCollectionMarketplacesComparisonDailyAverageQuery, getCertainCollectionMarketplacesComparisonQuery, getCertainCollectionNFTSellingQuery, getCertainCollectionTotalSingleNumberQuery } from "lib/queries/collection";
import { CertainCollectioncurrentValueAndChangeRatherThanYesterday, CertainCollectionDailySingleNumber, CertainCollectionMarketplacesComparison, CertainCollectionMarketplacesComparisonDailyAverage, CertainCollectionNFTSelling, CertainCollectionTotalSingleNumber, CollectionName } from "lib/types/types/collection";
import { flipsideQueryExecuter, getSimpleArrayData, getSimpleInfo } from "./utils";


// 1
export const getCertainCollectionDailySingleNumber = () =>
    getSimpleInfo<CertainCollectionDailySingleNumber>(
        "c854e0b2-7111-4c6d-b5a7-723c66fe9e80",
        "Daily Sales Volume(in USD),Daily NFT Price(in USD),Daily Sales Count,Daily Unique Buyers,Daily Unique Sellers"
    )
export const getCertainCollectionDailySingleNumberApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionDailySingleNumber[]>(getCertainCollectionDailySingleNumberQuery(collectionName));

// 2
export const getCertainCollectionTotalSingleNumber = () =>
    getSimpleInfo<CertainCollectionTotalSingleNumber>(
        "747b10d3-ad01-4005-ad16-6783c43cd923",
        "Total Sales Volume(in USD),Total Unique Buyers,Total Unique Sellers,Total Sales Count"
    )

export const getCertainCollectionTotalSingleNumberNumberApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionTotalSingleNumber[]>(getCertainCollectionTotalSingleNumberQuery(collectionName));


// 3
export const getCertainCollectioncurrentValueAndChangeRatherThanYesterday = () =>
    getSimpleInfo<CertainCollectioncurrentValueAndChangeRatherThanYesterday>(
        "293c8ba0-da6a-47a1-9b5d-e754c55718c1",
        "24h Sales Count,24h Sales Volume (in USD),24h Unique Buyers,24h Unique Sellers"
    )

export const getCertainCollectioncurrentValueAndChangeRatherThanYesterdayApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectioncurrentValueAndChangeRatherThanYesterday[]>(getCertainCollectioncurrentValueAndChangeRatherThanYesterdayQuery(collectionName));


// 4
export const getCertainCollectionNFTSelling = () =>
    getSimpleArrayData<CertainCollectionNFTSelling, CertainCollectionNFTSelling>(
        "2224455e-df5d-4364-a634-69ada1b8dc29",
        "Weekly number of NFTs sold,Cumulative number of NFTs sold,Weekly volume(in USD) of NFTs sold,Weekly number of NFT buyers Vs.sellers,Cumulative volume(in USD) of NFTs sold,Weekly average NFT price(in USD)"
    )

export const getCertainCollectionNFTSellingApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionNFTSelling[]>(getCertainCollectionNFTSellingQuery(collectionName));



// 5
export const getCertainCollectionMarketplacesComparison = () =>
    getSimpleArrayData<CertainCollectionMarketplacesComparison, CertainCollectionMarketplacesComparison>(
        "070213ee-261d-49ea-803d-3c0ec4ce4cd0",
        "Marketplaces share in volume of sale,Marketplaces share in number of sale"
    )

export const getCertainCollectionMarketplacesComparisonApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionMarketplacesComparison[]>(getCertainCollectionMarketplacesComparisonQuery(collectionName));

// 6
export const getCertainCollectionMarketplacesComparisonDailyAverage = () =>
    getSimpleArrayData<CertainCollectionMarketplacesComparisonDailyAverage, CertainCollectionMarketplacesComparisonDailyAverage>(
        "99374d73-eea9-4835-820e-f22ab63f239c",
        "Daily average number of sales on each marketplace,Daily average volume of sales on each marketplace,Daily average unique buyers on each marketplace,Daily average unique sellers on each marketplace,Daily average NFT price on each marketplace"
    )

export const getCertainCollectionMarketplacesComparisonDailyAverageApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionMarketplacesComparisonDailyAverage[]>(getCertainCollectionMarketplacesComparisonDailyAverageQuery(collectionName));

export const getCollectionNames = () =>
    getSimpleArrayData<CollectionName, CollectionName>(
        "a9433933-6698-4aa9-b86a-e3fa5a2c3932",
        "Collection Names"
    )