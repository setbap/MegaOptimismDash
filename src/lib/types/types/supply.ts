export interface SupplyOPHolders2DistributionOfOPHolders {
    "Distribution": string,
    "Count": number
}

export interface SupplyOPHolders1TopOPHolders {
    "WALLET": number
    "BALANCE": number
}

export interface SupplySingleNumber {
    totalSupply: number;
    circulatingSupply: number;
    circulationSupplyRatio: number;
}