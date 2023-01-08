import Supply from "lib/pages/supply";
import {
  getSupplyOPHolders2DistributionOfOPHolders,
  getSupplyOPHolders1TopOPHolders,
  getSupplyInfo,
} from "lib/requests/supply";

export async function getStaticProps() {
  const [
    supplyOPHolders2DistributionOfOPHolders,
    supplyOPHolders1TopOPHolders,
    supplyInfo,
  ] = await Promise.all([
    getSupplyOPHolders2DistributionOfOPHolders(),
    getSupplyOPHolders1TopOPHolders(),
    getSupplyInfo(),
  ]);

  return {
    props: {
      supplyOPHolders2DistributionOfOPHolders,
      supplyOPHolders1TopOPHolders,
      supplyInfo,
    },
    revalidate: 10 * 60,
  };
}

export type SupplyProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];

export default Supply;
