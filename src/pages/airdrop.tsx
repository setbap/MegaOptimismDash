import Airdrop from "lib/pages/airdrop";
import {
  getAirdropSingleNumberDelegations,
  getAirdropSingleNumberTotal,
  getAirdrop1AirdropOverTime,
  getAirdrop2AirdropDistribution,
  getAirdrop2AirdropDistributiontTokenDistribution,
  getAirdrop3TopDestinationsAfterClaimingTransactions,
  getAirdrop3TopDestinationsAfterClaimingVolume,
  getAirdrop4DelegationsToDelegateUsers,
  getAirdrop4DelegationsWeekly,
  getAirdrop1AirdropOvertimeCumulative,
} from "lib/requests/airdrop";
import { ReturnDataType } from "lib/types/base";

export async function getStaticProps() {
  const [
    airdropSingleNumberDelegations,
    airdropSingleNumberTotal,
    airdrop1AirdropOverTime,
    airdrop1AirdropsOvertimeCumulative,
    airdrop2AirdropDistribution,
    airdrop2AirdropDistributiontTokenDistribution,
    airdrop3TopDestinationsAfterClaimingTransactions,
    airdrop3TopDestinationsAfterClaimingVolume,
    airdrop4DelegationsToDelegateUsers,
    airdrop4DelegationsWeekly,
  ] = await Promise.all([
    getAirdropSingleNumberDelegations(),
    getAirdropSingleNumberTotal(),
    getAirdrop1AirdropOverTime(),
    getAirdrop1AirdropOvertimeCumulative(),
    getAirdrop2AirdropDistribution(),
    getAirdrop2AirdropDistributiontTokenDistribution(),
    getAirdrop3TopDestinationsAfterClaimingTransactions(),
    getAirdrop3TopDestinationsAfterClaimingVolume(),
    getAirdrop4DelegationsToDelegateUsers(),
    getAirdrop4DelegationsWeekly(),
  ]);

  return {
    props: {
      airdropSingleNumberDelegations,
      airdropSingleNumberTotal,
      airdrop1AirdropOverTime,
      airdrop1AirdropsOvertimeCumulative,
      airdrop2AirdropDistribution,
      airdrop2AirdropDistributiontTokenDistribution,
      airdrop3TopDestinationsAfterClaimingTransactions,
      airdrop3TopDestinationsAfterClaimingVolume,
      airdrop4DelegationsToDelegateUsers,
      airdrop4DelegationsWeekly,
    },
    revalidate: 10 * 60,
  };
}

export type AirdropProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];

export default Airdrop;
