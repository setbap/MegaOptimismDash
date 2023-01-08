export interface Governance1DelegationsOvertime {
    "Day": string,
    "Delegators Count": number
}
export interface Governance2DelegationBreakdownByType {
    "Type": "Self-Delegation",
    "Delegators Count": number
}
export interface Governance2DelegationBreakdownByTypeWeekly {
    "Day": string,
    "Type": string,
    "Delegators Count": number
}
export interface Governance3TopProjectsOrUsersThatDelegateToThem {
    "To Delegate": string,
    "Total Delegators": number
}

export interface GovernanceSingleNumber {
    "Delegators Count": number
}