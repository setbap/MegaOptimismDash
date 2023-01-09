import { Box, SimpleGrid } from "@chakra-ui/react";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { SupplyProps } from "pages/supply";
import DonutChart from "lib/components/charts/DonutChart";
import HeaderSection from "lib/components/basic/HeaderSection";
import { SupplyOPHolders1TopOPHolders } from "lib/types/types/supply";
import { ColumnDef } from "@tanstack/react-table";
import millify from "millify";
import TableBox from "lib/components/charts/TableBox";

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

const colDef: ColumnDef<SupplyOPHolders1TopOPHolders>[] = [
  {
    accessorFn: (row) => row.WALLET,
    enableSorting: false,
    id: "Wallet",
    cell: (info) => info.getValue(),
    header: () => <span>Wallet</span>,
  },
  {
    accessorFn: (row) => row.BALANCE,
    id: "Balance",
    cell: (info) =>
      millify(info.getValue() as number, {
        precision: 2,
        decimalSeparator: ".",
      }),
    header: () => <span>Balance</span>,
  },
];

const Supply = ({
  supplyOPHolders1TopOPHolders,
  supplyOPHolders2DistributionOfOPHolders,
  supplyInfo,
}: SupplyProps): JSX.Element => {
  const supplyInfoName = supplyInfo.title.split(",");
  return (
    <>
      <NextSeo
        title={`Optimism | Supply`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Optimism  | Supply`,
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
        <HeaderSection title="Optimism($OP) Supply"></HeaderSection>
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
            stat={supplyInfo.data.totalSupply}
            title={supplyInfoName[0]}
            status="inc"
            isExternalLink
            hasArrowIcon={false}
            link={supplyInfo.key}
          />
          <StatsCard
            stat={supplyInfo.data.circulatingSupply}
            title={supplyInfoName[1]}
            status="inc"
            isExternalLink
            hasArrowIcon={false}
            link={supplyInfo.key}
          />
          <StatsCard
            stat={supplyInfo.data.circulationSupplyRatio}
            title={supplyInfoName[2]}
            status="inc"
            unit="%"
            isExternalLink
            hasArrowIcon={false}
            link={supplyInfo.key}
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
          <HeaderSection title="Distribution of OP holders" />
          <DonutChart
            queryLink={supplyOPHolders2DistributionOfOPHolders.key}
            data={supplyOPHolders2DistributionOfOPHolders.data}
            modalInfo=""
            baseSpan={3}
            title={supplyOPHolders2DistributionOfOPHolders.title}
            nameKey="Distribution"
            dataKey="Count"
          />
          <HeaderSection title="Top OP holders" />
          <TableBox
            customHeaderColor={colors[2]}
            queryLink={supplyOPHolders1TopOPHolders.key}
            title={supplyOPHolders1TopOPHolders.title}
            baseSpan={3}
            tablePageSize={10}
            modalInfo={``}
            data={supplyOPHolders1TopOPHolders.data}
            columnsDef={colDef}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Supply;
