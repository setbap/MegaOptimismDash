import { AirdropSingleNumberTotal, AirdropSingleNumberDelegations, Airdrop1AirdropOverTime, Airdrop1AirdropOvertimeCumulative, Airdrop2AirdropDistribution, Airdrop2AirdropDistributiontTokenDistribution, Airdrop3TopDestinationsAfterClaimingTransactions, Airdrop3TopDestinationsAfterClaimingVolume, Airdrop4DelegationsToDelegateUsers, Airdrop4DelegationsWeekly } from "lib/types/types/airdrop";
import { getSimpleInfo, getSimpleArrayData } from "./utils";


export const getAirdropSingleNumberDelegations = () =>
    getSimpleInfo<AirdropSingleNumberDelegations>(
        "44898b91-9345-430c-831e-4e28c910cb06",
        "Total Delegators,Ratio of Delegators to Claimers(%)"
    )

export const getAirdropSingleNumberTotal = () =>
    getSimpleInfo<AirdropSingleNumberTotal>(
        "49b9a9b2-108c-4964-b091-a825189b622a",
        "User Claimed(%),Token Claimed(%),Untitled Visual,Total Eligible Users,Total Airdrop Token,Total claimers,Total OP claimed"
    )

export const getAirdrop1AirdropOverTime = () =>
    getSimpleArrayData<Airdrop1AirdropOverTime>(
        "31901b6a-d5bc-488e-9c0d-9a6e371fb11a",
        "Cumulative number of claimers,Cumulative claimed amount(in OP),Weekly claimed amount(in OP),Weekly number of claimers"
    );


export const getAirdrop1AirdropOvertimeCumulative = () =>
    getSimpleArrayData<Airdrop1AirdropOvertimeCumulative, Airdrop1AirdropOvertimeCumulative>(
        "f4413a3a-fd78-4e5f-9b84-0eaec2f793f1",
        "Cumulative user claimed (%),Cumulative token claimed(%)"
    );

export const getAirdrop2AirdropDistribution = () =>
    getSimpleArrayData<Airdrop2AirdropDistribution, Airdrop2AirdropDistribution>(
        "af8e0b7e-4023-4a34-9f7e-eb00c675775b",
        "Distribution of claimers"
    );

export const getAirdrop2AirdropDistributiontTokenDistribution = () =>
    getSimpleArrayData<Airdrop2AirdropDistributiontTokenDistribution, Airdrop2AirdropDistributiontTokenDistribution>(
        "ba640448-a1b0-4fe3-a5f7-b03742de54cd",
        "The number of tokens that have reached to the claimers",
        "Distribution"
    );


export const getAirdrop3TopDestinationsAfterClaimingTransactions = () =>
    getSimpleArrayData<Airdrop3TopDestinationsAfterClaimingTransactions, Airdrop3TopDestinationsAfterClaimingTransactions>(
        "7ac2549c-4fea-4c1e-9bd4-206b5355d1f1",
        "Top destinations after claiming in terms of transactions"
    );

export const getAirdrop3TopDestinationsAfterClaimingVolume = () =>
    getSimpleArrayData<Airdrop3TopDestinationsAfterClaimingVolume, Airdrop3TopDestinationsAfterClaimingVolume>(
        "fc79ce46-a0a6-4672-8bac-f34f8e24c667",
        "Top destinations after claiming in terms of volume"
    );

export const getAirdrop4DelegationsToDelegateUsers = () =>
    getSimpleArrayData<Airdrop4DelegationsToDelegateUsers, Airdrop4DelegationsToDelegateUsers>(
        "79a3863c-02b4-4f91-b1aa-6ca0eaee4761",
        "Most popular projects or users for delegate to them"
    );

export const getAirdrop4DelegationsWeekly = () =>
    getSimpleArrayData<Airdrop4DelegationsWeekly, Airdrop4DelegationsWeekly>(
        "14d3f915-6c7e-404e-a89b-58e3cb1815bb",
        "Number of delegation over time"
    );