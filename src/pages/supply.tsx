import Supply from "lib/pages/supply";
import {
  getSupplyOPHolders2DistributionOfOPHolders,
  getSupplyOPHolders1TopOPHolders,
} from "lib/requests/supply";

export async function getStaticProps() {
  const [
    supplyOPHolders2DistributionOfOPHolders,
    supplyOPHolders1TopOPHolders,
  ] = await Promise.all([
    getSupplyOPHolders2DistributionOfOPHolders(),
    getSupplyOPHolders1TopOPHolders(),
  ]);

  return {
    props: {
      supplyOPHolders2DistributionOfOPHolders,
      supplyOPHolders1TopOPHolders,
    },
    revalidate: 10 * 60,
  };
}

export type SupplyProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];

export default Supply;
