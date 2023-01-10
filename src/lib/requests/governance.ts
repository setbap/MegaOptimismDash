
import { ReturnDataType } from "lib/types/base";
import { Governance1DelegationsOvertime, Governance2DelegationBreakdownByType, Governance2DelegationBreakdownByTypeWeekly, Governance3TopProjectsOrUsersThatDelegateToThem, GovernanceSingleNumber } from "lib/types/types/governance";
import { getSimpleArrayData, getSimpleInfo, pivotData } from "./utils";


export const getGovernanceSingleNumber = () =>
    getSimpleInfo<GovernanceSingleNumber>(
        "9885917a-12b9-43ef-8547-2f7c834061ff",
        "Delegators Count"
    );


export const getGovernance1DelegationsOvertime = () =>
    getSimpleArrayData<Governance1DelegationsOvertime, Governance1DelegationsOvertime>(
        "4d353431-ba90-42ae-ae7b-a1e0799d03ba",
        "Number of delegation over time",
        "Day"
    );

export const getGovernance2DelegationBreakdownByType = () =>
    getSimpleArrayData<Governance2DelegationBreakdownByType, Governance2DelegationBreakdownByType>(
        "48646cc5-0a76-4588-bf1c-41535a3dbdbe",
        "Number of delegation breakdown by type",
    );

export const _getGovernance2DelegationBreakdownByTypeWeekly = () =>
    getSimpleArrayData<Governance2DelegationBreakdownByTypeWeekly, Governance2DelegationBreakdownByTypeWeekly>(
        "d659defa-1c32-4dbd-ab03-d98a6b543c78",
        "Delegation Over time breakdown by type",
    );

export const getGovernance2DelegationBreakdownByTypeWeekly: () => Promise<
    ReturnDataType<any>
> = async () => {
    const rawData = await _getGovernance2DelegationBreakdownByTypeWeekly();

    const types = Array.from(
        new Set(
            rawData.data.map((item) => {
                return item["Type"];
            })
        )
    );
    const delegatorsCount = pivotData(
        rawData.data,
        "Day",
        "Type",
        "Delegators Count",
        types,
        0
    );

    return {
        data: {
            delegatorsCount: delegatorsCount.sort((a, b) =>
                a['Name'] > b['Name'] ? 1 : -1
            ),
            types,
        },
        key: rawData.key,
        title: rawData.title,
    };
};

export const getGovernance3TopProjectsOrUsersThatDelegateToThem = () =>
    getSimpleArrayData<Governance3TopProjectsOrUsersThatDelegateToThem, Governance3TopProjectsOrUsersThatDelegateToThem>(
        "86618521-6ebe-4a32-adf1-cb12ad5b9898",
        "Most popular projects or users for delegate to them",
    );
