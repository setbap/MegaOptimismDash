import { Box, color, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { GovernanceProps } from "pages/governance";
import DonutChart from "lib/components/charts/DonutChart";
import BarGraph from "lib/components/charts/BarGraph";
import HeaderSection from "lib/components/basic/HeaderSection";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";

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

const Governance = ({
  governanceSingleNumber,
  governance1DelegationsOvertime,
  governance2DelegationBreakdownByType,
  governance2DelegationBreakdownByTypeWeekly,
  governance3TopProjectsOrUsersThatDelegateToThem,
}: GovernanceProps): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`Optimism | Governance`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Optimism  | Governance`,
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
        <HeaderSection title="Optimism Governance"></HeaderSection>
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
            stat={governanceSingleNumber.data["Delegators Count"]}
            title={governanceSingleNumber.title}
            status="inc"
            hasArrowIcon={false}
            link={governanceSingleNumber.key}
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
          <HeaderSection title="Delegations Over time" />
          <BarGraph
            values={governance1DelegationsOvertime.data}
            queryLink={governance1DelegationsOvertime.key}
            modalInfo=""
            title={governance1DelegationsOvertime.title}
            baseSpan={3}
            dataKey="Day"
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={[
              {
                key: "Delegators Count",
                color: colors[2],
              },
            ]}
          />
          <HeaderSection title="Delegations Over time" />
          <DonutChart
            queryLink={governance2DelegationBreakdownByType.key}
            data={governance2DelegationBreakdownByType.data}
            modalInfo=""
            baseSpan={1}
            title={governance2DelegationBreakdownByType.title}
            nameKey="Type"
            dataKey="Delegators Count"
          />
          <BarGraph
            values={
              governance2DelegationBreakdownByTypeWeekly.data.delegatorsCount
            }
            queryLink={governance2DelegationBreakdownByTypeWeekly.key}
            modalInfo=""
            title={governance2DelegationBreakdownByTypeWeekly.title}
            baseSpan={2}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={governance2DelegationBreakdownByTypeWeekly.data.types.map(
              (type: string, index: number) => ({
                key: type,
                color: colors[index % colors.length],
              })
            )}
          />

          <HeaderSection title="Top projects or users that delegate to them" />
          <BarGraph
            values={governance3TopProjectsOrUsersThatDelegateToThem.data}
            queryLink={governance3TopProjectsOrUsersThatDelegateToThem.key}
            modalInfo=""
            isNotDate
            title={governance3TopProjectsOrUsersThatDelegateToThem.title}
            baseSpan={3}
            dataKey="To Delegate"
            oyLabel=""
            oxLabel="To Delegate"
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

export default Governance;
