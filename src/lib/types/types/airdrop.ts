export interface AirdropSingleNumberTotal {
    "Total Token": number;
    "Total Eligible Users": number;
    "Total Claimed Token": number;
    "Total Claimers": number;
    "Token Claimed (%)": number;
    "User Claimed (%)": number;
}

export interface AirdropSingleNumberDelegations {
    "Total Delegators": number;
    "Ratio of Delegators to Claimers (%)": number;
}

export interface Airdrop1AirdropOverTime {
    "Day": string,
    "Claimed Amount": number;
    "Tx count": number;
    "Cum Claimed Amount": number;
    "Cum Tx count": number;
}


export interface Airdrop1AirdropOvertimeCumulative {
    "Day": string,
    "Token Claimed (%)": number;
    "User Claimed (%)": number;
}


export interface Airdrop2AirdropDistribution {
    "Distribution": string,
    "Count": number;
}


export interface Airdrop2AirdropDistributiontTokenDistribution {
    "Distribution": number;
    "Count": number;
}


export interface Airdrop3TopDestinationsAfterClaimingTransactions {
    "Destination": string,
    "tx count": number;
}


export interface Airdrop3TopDestinationsAfterClaimingVolume {
    "Destination": string,
    "Amount (in OP)": number;
}


export interface Airdrop4DelegationsToDelegateUsers {
    "To Delegate": string,
    "Total Delegators": number;
}


export interface Airdrop4DelegationsWeekly {
    "Day": string,
    "Total Delegators": number;
}


