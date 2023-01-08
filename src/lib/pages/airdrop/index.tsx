import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { AirdropProps } from "pages/airdrop";
import DonutChart from "lib/components/charts/DonutChart";
import BarGraph from "lib/components/charts/BarGraph";
import HeaderSection from "lib/components/basic/HeaderSection";

const colors = [
  "#ff5722",
  "#03a9f4",
  "#ffc107",
  "#4caf50",
  "#00bcd4",
  "#f44336",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#009688",
  "#607d8b",
];

const NFT = ({
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
}: AirdropProps): JSX.Element => {
  const airdropSingleNumberDelegationsName =
    airdropSingleNumberDelegations.title.split(",");
  const airdropSingleNumberTotalName =
    airdropSingleNumberTotal.title.split(",");
  const airdrop1AirdropOverTimeName = airdrop1AirdropOverTime.title.split(",");
  const airdrop1AirdropsOvertimeCumulativeName =
    airdrop1AirdropsOvertimeCumulative.title.split(",");

  return (
    <>
      <NextSeo
        title={`Optimism | Airdrop`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Optimism  | Airdrop`,
          description: `Track the latest stats and trends on ${names.BLOCKCHAIN}`,
          images: [
            {
              url: `https://${names.SITE_URL}/og.png`,
              alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
            },
          ],
          site_name: `${names.APP_NAME}`,
        }}
        twitter={{
          handle: "@flipsidecrypto",
          cardType: "summary_large_image",
        }}
      />
      <Box mx={"auto"} pt="4" px={{ base: 3, sm: 2, md: 8 }}>
        <HeaderSection title="Optimism NFT"></HeaderSection>
        <Box pt={"4"}></Box>
        <HeaderSection title="Glance">
          {`
according section defined in above, i prepare some of static about these topics. all data came from Flipside data and with click of title of each item can see query these data in Flipside Crypto
`}
        </HeaderSection>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            stat={airdropSingleNumberTotal.data["Total Token"]}
            title={airdropSingleNumberTotalName[4]}
            status="inc"
            hasArrowIcon={false}
            link={airdropSingleNumberTotal.key}
          />

          <StatsCard
            stat={airdropSingleNumberTotal.data["Total Eligible Users"]}
            title={airdropSingleNumberTotalName[3]}
            status="inc"
            hasArrowIcon={false}
            link={airdropSingleNumberTotal.key}
          />

          <StatsCard
            stat={airdropSingleNumberTotal.data["Total Claimed Token"]}
            title={airdropSingleNumberTotalName[6]}
            status="inc"
            hasArrowIcon={false}
            link={airdropSingleNumberTotal.key}
          />

          <StatsCard
            stat={airdropSingleNumberTotal.data["Total Claimers"]}
            title={airdropSingleNumberTotalName[5]}
            status="inc"
            hasArrowIcon={false}
            link={airdropSingleNumberTotal.key}
          />

          <StatsCard
            stat={airdropSingleNumberTotal.data["Token Claimed (%)"]}
            title={airdropSingleNumberTotalName[1]}
            status="inc"
            hasArrowIcon={false}
            link={airdropSingleNumberTotal.key}
          />

          <StatsCard
            stat={airdropSingleNumberTotal.data["User Claimed (%)"]}
            title={airdropSingleNumberTotalName[0]}
            status="inc"
            hasArrowIcon={false}
            link={airdropSingleNumberTotal.key}
          />

          <StatsCard
            stat={airdropSingleNumberDelegations.data["Total Delegators"]}
            title={airdropSingleNumberDelegationsName[0]}
            status="inc"
            hasArrowIcon={false}
            link={airdropSingleNumberDelegations.key}
          />
          <StatsCard
            stat={
              airdropSingleNumberDelegations.data[
                "Ratio of Delegators to Claimers (%)"
              ]
            }
            title={airdropSingleNumberDelegationsName[1]}
            status="inc"
            hasArrowIcon={false}
            link={airdropSingleNumberDelegations.key}
          />
        </SimpleGrid>

        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          pb={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <HeaderSection title="Airdrop Over time" />

          <BarGraph
            values={airdrop1AirdropOverTime.data}
            queryLink={airdrop1AirdropOverTime.key}
            modalInfo=""
            title={airdrop1AirdropOverTimeName[2]}
            baseSpan={2}
            dataKey="Day"
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={[
              {
                key: "Claimed Amount",
                color: colors[2],
              },
            ]}
          />

          <ChartBox
            xAxisDataKey={"Day"}
            areaDataKey={"Cum Claimed Amount"}
            title={airdrop1AirdropOverTimeName[1]}
            baseSpan={1}
            customColor={colors[0]}
            queryLink={airdrop1AirdropOverTime.key}
            data={airdrop1AirdropOverTime.data}
          />
          <BarGraph
            values={airdrop1AirdropOverTime.data}
            queryLink={airdrop1AirdropOverTime.key}
            modalInfo=""
            title={airdrop1AirdropOverTimeName[3]}
            baseSpan={2}
            dataKey="Day"
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={[
              {
                key: "Tx count",
                color: colors[2],
              },
            ]}
          />
          <ChartBox
            xAxisDataKey={"Day"}
            areaDataKey={"Cum Tx count"}
            title={airdrop1AirdropOverTimeName[0]}
            baseSpan={1}
            customColor={colors[0]}
            queryLink={airdrop1AirdropOverTime.key}
            data={airdrop1AirdropOverTime.data}
          />

          <ChartBox
            xAxisDataKey={"Day"}
            areaDataKey={"User Claimed (%)"}
            title={airdrop1AirdropsOvertimeCumulativeName[0]}
            baseSpan={1}
            customColor={colors[0]}
            queryLink={airdrop1AirdropsOvertimeCumulative.key}
            data={airdrop1AirdropsOvertimeCumulative.data}
          />

          <ChartBox
            xAxisDataKey={"Day"}
            areaDataKey={"Token Claimed (%)"}
            title={airdrop1AirdropsOvertimeCumulativeName[1]}
            baseSpan={1}
            customColor={colors[0]}
            queryLink={airdrop1AirdropsOvertimeCumulative.key}
            data={airdrop1AirdropsOvertimeCumulative.data}
          />

          <HeaderSection title="Airdrop distribution" />
          <BarGraph
            values={airdrop2AirdropDistributiontTokenDistribution.data}
            queryLink={airdrop2AirdropDistributiontTokenDistribution.key}
            modalInfo=""
            title={airdrop2AirdropDistributiontTokenDistribution.title}
            baseSpan={2}
            isNotDate
            dataKey="Distribution"
            oyLabel=""
            oxLabel="Distribution"
            hideLegend
            labels={[
              {
                key: "Count",
                color: colors[2],
              },
            ]}
          />

          <DonutChart
            queryLink={airdrop2AirdropDistribution.key}
            data={airdrop2AirdropDistribution.data}
            modalInfo=""
            baseSpan={1}
            title={airdrop2AirdropDistribution.title}
            nameKey="Distribution"
            dataKey="Count"
          />

          <HeaderSection title="Top destinations after airdrop claiming" />

          <DonutChart
            queryLink={airdrop3TopDestinationsAfterClaimingTransactions.key}
            data={airdrop3TopDestinationsAfterClaimingTransactions.data}
            modalInfo=""
            baseSpan={1}
            title={airdrop3TopDestinationsAfterClaimingTransactions.title}
            nameKey="Destination"
            dataKey="tx count"
          />

          <DonutChart
            queryLink={airdrop3TopDestinationsAfterClaimingVolume.key}
            data={airdrop3TopDestinationsAfterClaimingVolume.data}
            modalInfo=""
            baseSpan={1}
            title={airdrop3TopDestinationsAfterClaimingVolume.title}
            nameKey="Destination"
            dataKey="Amount (in OP)"
          />

          <HeaderSection title="Airdrop Delegations" />

          <BarGraph
            values={airdrop4DelegationsWeekly.data}
            queryLink={airdrop4DelegationsWeekly.key}
            modalInfo=""
            title={airdrop4DelegationsWeekly.title}
            baseSpan={3}
            dataKey="Day"
            oyLabel=""
            oxLabel="Distribution"
            hideLegend
            labels={[
              {
                key: "Total Delegators",
                color: colors[2],
              },
            ]}
          />

          <BarGraph
            values={airdrop4DelegationsToDelegateUsers.data}
            queryLink={airdrop4DelegationsToDelegateUsers.key}
            modalInfo=""
            title={airdrop4DelegationsToDelegateUsers.title}
            baseSpan={3}
            isNotDate
            dataKey="To Delegate"
            oyLabel=""
            oxLabel="To Delegate"
            hideLegend
            labels={[
              {
                key: "Total Delegators",
                color: colors[2],
              },
            ]}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default NFT;
