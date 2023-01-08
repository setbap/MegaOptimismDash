import Governance from "lib/pages/governance";
import {
  getGovernanceSingleNumber,
  getGovernance1DelegationsOvertime,
  getGovernance2DelegationBreakdownByType,
  getGovernance2DelegationBreakdownByTypeWeekly,
  getGovernance3TopProjectsOrUsersThatDelegateToThem,
} from "lib/requests/governance";

export async function getStaticProps() {
  const [
    governanceSingleNumber,
    governance1DelegationsOvertime,
    governance2DelegationBreakdownByType,
    governance2DelegationBreakdownByTypeWeekly,
    governance3TopProjectsOrUsersThatDelegateToThem,
  ] = await Promise.all([
    getGovernanceSingleNumber(),
    getGovernance1DelegationsOvertime(),
    getGovernance2DelegationBreakdownByType(),
    getGovernance2DelegationBreakdownByTypeWeekly(),
    getGovernance3TopProjectsOrUsersThatDelegateToThem(),
  ]);

  return {
    props: {
      governanceSingleNumber,
      governance1DelegationsOvertime,
      governance2DelegationBreakdownByType,
      governance2DelegationBreakdownByTypeWeekly,
      governance3TopProjectsOrUsersThatDelegateToThem,
    },
    revalidate: 10 * 60,
  };
}

export type GovernanceProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];

export default Governance;
