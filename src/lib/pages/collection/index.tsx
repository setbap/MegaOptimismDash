import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Progress,
  SimpleGrid,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { CollectionProps } from "pages/collection";
import DonutChart from "lib/components/charts/DonutChart";
import BarGraph from "lib/components/charts/BarGraph";
import HeaderSection from "lib/components/basic/HeaderSection";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import { useQuery } from "react-query";
import { CollectionDataApi } from "pages/api/collection/[collectionName]";
import { useState } from "react";
import { BiChevronUp } from "react-icons/bi";

const colors = [
  "#ff5722",
  "#03a9f4",
  "#ffc107",
  "#4caf50",
  "#3f51b5",
  "#9c27b0",
  "#f44336",
  "#673ab7",
  "#00bcd4",
  "#2196f3",
  "#009688",
  "#607d8b",
];

const NFT = ({
  certainCollectionDailySingleNumber,
  certainCollectionTotalSingleNumber,
  certainCollectioncurrentValueAndChangeRatherThanYesterday,
  certainCollectionNFTSelling,
  certainCollectionMarketplacesComparison,
  certainCollectionMarketplacesComparisonDailyAverage,
  collectionNames,
}: CollectionProps): JSX.Element => {
  const certainCollectionDailySingleNumberNames =
    certainCollectionDailySingleNumber.title.split(",");
  const certainCollectionTotalSingleNumberNames =
    certainCollectionTotalSingleNumber.title.split(",");
  const certainCollectioncurrentValueAndChangeRatherThanYesterdayNames =
    certainCollectioncurrentValueAndChangeRatherThanYesterday.title.split(",");
  const certainCollectionNFTSellingNames =
    certainCollectionNFTSelling.title.split(",");
  const certainCollectionMarketplacesComparisonNames =
    certainCollectionMarketplacesComparison.title.split(",");
  const certainCollectionMarketplacesComparisonDailyAverageNames =
    certainCollectionMarketplacesComparisonDailyAverage.title.split(",");
  const toast = useToast();
  const [pageData, setPageData] = useState({
    certainCollectionDailySingleNumber: certainCollectionDailySingleNumber.data,
    certainCollectionTotalSingleNumber: certainCollectionTotalSingleNumber.data,
    certainCollectioncurrentValueAndChangeRatherThanYesterday:
      certainCollectioncurrentValueAndChangeRatherThanYesterday.data,
    certainCollectionNFTSelling: certainCollectionNFTSelling.data,
    certainCollectionMarketplacesComparison:
      certainCollectionMarketplacesComparison.data,
    certainCollectionMarketplacesComparisonDailyAverage:
      certainCollectionMarketplacesComparisonDailyAverage.data,
    collectionName: "mirror",
  });

  const [nextSelectedCollection, setNextSelectedCollection] =
    useState("mirror");

  const query = useQuery(
    nextSelectedCollection,
    async (s) => {
      const fetchedData = await fetch(`/api/collection/${s.queryKey[0]}`);
      const data: CollectionDataApi = await fetchedData.json();
      return data;
    },
    {
      onSuccess: (newData) => {
        toast.closeAll();
        if (newData.collectionName !== pageData.collectionName) {
          toast({
            position: "top-right",
            status: "success",
            title: `Success`,
            description: `data of "${newData.collectionName}" loaded successfully.`,
          });
        }
        setPageData(newData);
      },
      onError: (x) => {
        toast({
          position: "top-right",
          status: "error",
          title: `Error`,
          description: `an error happened`,
        });
      },
    }
  );

  const submitAddress = (name: string) => {
    setNextSelectedCollection(name);

    query.refetch({ queryKey: name });
  };
  const bgCard = useColorModeValue("white", "#191919");
  return (
    <>
      <NextSeo
        title={`Optimism | NFT Collection`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Optimism  | NFT Collection`,
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
        <Progress
          zIndex={"banner"}
          position={"fixed"}
          bottom={"0"}
          height="8px"
          width="full"
          hasStripe
          bg="transparent"
          size={["sm", "md", "lg"]}
          left={"0"}
          colorScheme="red"
          isIndeterminate={query.isLoading}
        />
        <Box
          zIndex={"banner"}
          position={"fixed"}
          bottom={["42px", "64px"]}
          right={["12px", "32px"]}
        >
          <Menu isLazy>
            <MenuButton
              px={5}
              py={3}
              bg={names.BLOCKCHAIN_HEADER_GRADIENT}
              _expanded={{ bg: names.BLOCKCHAIN_HEADER_GRADIENT }}
              _hover={{ bg: names.BLOCKCHAIN_HEADER_GRADIENT }}
              color="white"
              fontSize={["lg", "xl"]}
              transition="all 0.2s"
              borderRadius="lg"
              as={Button}
              rightIcon={<BiChevronUp />}
            >
              {pageData.collectionName}
            </MenuButton>

            <MenuList bg={bgCard}>
              {/* MenuItems are not rendered unless Menu is open */}

              {collectionNames.data.map((name, index) => (
                <MenuItem
                  bg={bgCard}
                  onClick={() => submitAddress(name["Project Name"])}
                  value={name["Project Name"]}
                  key={index}
                  color={
                    name["Project Name"] === pageData.collectionName
                      ? "red"
                      : "MenuText"
                  }
                >
                  {name["Project Name"]} ({name["Collection Name"]})
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
        <HeaderSection title="Optimism NFT Collection">
          {`
The purpose of this section is focusing on certain NFT collection on this network. Some of most popular collections listed here and you can choose one of them to see all metrics related to it.
`}
        </HeaderSection>
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
            stat={
              pageData.certainCollectionTotalSingleNumber["total sales count"]
            }
            title={
              certainCollectionTotalSingleNumberNames[3] +
              " [" +
              pageData.collectionName +
              "]"
            }
            status="inc"
            hasArrowIcon={false}
            link={certainCollectionTotalSingleNumber.key}
          />
          <StatsCard
            stat={
              pageData.certainCollectionTotalSingleNumber[
                "total sales volume (in usd)"
              ]
            }
            title={
              certainCollectionTotalSingleNumberNames[0] +
              " [" +
              pageData.collectionName +
              "]"
            }
            status="inc"
            hasArrowIcon={false}
            link={certainCollectionTotalSingleNumber.key}
          />
          <StatsCard
            stat={
              pageData.certainCollectionTotalSingleNumber["total unique buyers"]
            }
            title={
              certainCollectionTotalSingleNumberNames[1] +
              " [" +
              pageData.collectionName +
              "]"
            }
            status="inc"
            hasArrowIcon={false}
            link={certainCollectionTotalSingleNumber.key}
          />
          <StatsCard
            stat={
              pageData.certainCollectionTotalSingleNumber[
                "total unique sellers"
              ]
            }
            title={
              certainCollectionTotalSingleNumberNames[2] +
              " [" +
              pageData.collectionName +
              "]"
            }
            status="inc"
            hasArrowIcon={false}
            link={certainCollectionTotalSingleNumber.key}
          />

          {/* daily */}
          <StatsCard
            stat={
              pageData.certainCollectionDailySingleNumber[
                "daily nft price (in usd)"
              ]
            }
            title={
              certainCollectionDailySingleNumberNames[1] +
              " [" +
              pageData.collectionName +
              "]"
            }
            status="inc"
            hasArrowIcon={false}
            link={certainCollectionDailySingleNumber.key}
          />

          <StatsCard
            stat={
              pageData.certainCollectionDailySingleNumber["daily sales count"]
            }
            title={
              certainCollectionDailySingleNumberNames[2] +
              " [" +
              pageData.collectionName +
              "]"
            }
            status="inc"
            hasArrowIcon={false}
            link={certainCollectionDailySingleNumber.key}
          />

          <StatsCard
            stat={
              pageData.certainCollectionDailySingleNumber[
                "daily sales volume (in usd)"
              ]
            }
            title={
              certainCollectionDailySingleNumberNames[0] +
              " [" +
              pageData.collectionName +
              "]"
            }
            status="inc"
            hasArrowIcon={false}
            link={certainCollectionDailySingleNumber.key}
          />

          <StatsCard
            stat={
              pageData.certainCollectionDailySingleNumber["daily unique buyers"]
            }
            title={
              certainCollectionDailySingleNumberNames[3] +
              " [" +
              pageData.collectionName +
              "]"
            }
            status="inc"
            hasArrowIcon={false}
            link={certainCollectionDailySingleNumber.key}
          />

          <StatsCard
            stat={
              pageData.certainCollectionDailySingleNumber[
                "daily unique sellers"
              ]
            }
            title={
              certainCollectionDailySingleNumberNames[4] +
              " [" +
              pageData.collectionName +
              "]"
            }
            status="inc"
            hasArrowIcon={false}
            link={certainCollectionDailySingleNumber.key}
          />

          <HeaderSection title="24h changes" />
          <StatsCard
            stat={
              pageData
                .certainCollectioncurrentValueAndChangeRatherThanYesterday[
                "24h sales count"
              ]
            }
            title={
              certainCollectioncurrentValueAndChangeRatherThanYesterdayNames[0] +
              " [" +
              pageData.collectionName +
              "]"
            }
            change={
              pageData
                .certainCollectioncurrentValueAndChangeRatherThanYesterday[
                "change (%) sales count"
              ]
            }
            status={
              pageData
                .certainCollectioncurrentValueAndChangeRatherThanYesterday[
                "change (%) sales count"
              ] >= 0
                ? "inc"
                : "dec"
            }
            hasArrowIcon={true}
            link={certainCollectioncurrentValueAndChangeRatherThanYesterday.key}
          />
          <StatsCard
            stat={
              pageData
                .certainCollectioncurrentValueAndChangeRatherThanYesterday[
                "24h sales volume (in usd)"
              ]
            }
            title={
              certainCollectioncurrentValueAndChangeRatherThanYesterdayNames[1] +
              " [" +
              pageData.collectionName +
              "]"
            }
            change={
              pageData
                .certainCollectioncurrentValueAndChangeRatherThanYesterday[
                "change (%) sales volume"
              ]
            }
            status={
              pageData
                .certainCollectioncurrentValueAndChangeRatherThanYesterday[
                "change (%) sales volume"
              ] >= 0
                ? "inc"
                : "dec"
            }
            hasArrowIcon={true}
            link={certainCollectioncurrentValueAndChangeRatherThanYesterday.key}
          />
          <StatsCard
            stat={
              pageData
                .certainCollectioncurrentValueAndChangeRatherThanYesterday[
                "24h unique buyers"
              ]
            }
            title={
              certainCollectioncurrentValueAndChangeRatherThanYesterdayNames[2] +
              " [" +
              pageData.collectionName +
              "]"
            }
            change={
              pageData
                .certainCollectioncurrentValueAndChangeRatherThanYesterday[
                "change (%) unique buyers"
              ]
            }
            status={
              pageData
                .certainCollectioncurrentValueAndChangeRatherThanYesterday[
                "change (%) unique buyers"
              ] >= 0
                ? "inc"
                : "dec"
            }
            hasArrowIcon={true}
            link={certainCollectioncurrentValueAndChangeRatherThanYesterday.key}
          />
          <StatsCard
            stat={
              pageData
                .certainCollectioncurrentValueAndChangeRatherThanYesterday[
                "24h unique sellers"
              ]
            }
            title={
              certainCollectioncurrentValueAndChangeRatherThanYesterdayNames[3] +
              " [" +
              pageData.collectionName +
              "]"
            }
            change={
              pageData
                .certainCollectioncurrentValueAndChangeRatherThanYesterday[
                "change (%) unique sellers"
              ]
            }
            status={
              pageData
                .certainCollectioncurrentValueAndChangeRatherThanYesterday[
                "change (%) unique sellers"
              ] >= 0
                ? "inc"
                : "dec"
            }
            hasArrowIcon={true}
            link={certainCollectioncurrentValueAndChangeRatherThanYesterday.key}
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
          <HeaderSection title="NFT selling" />

          <LineChartWithBar
            data={pageData.certainCollectionNFTSelling}
            queryLink={certainCollectionNFTSelling.key}
            title={
              certainCollectionNFTSellingNames[0] +
              " [" +
              pageData.collectionName +
              "]"
            }
            baseSpan={2}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="day"
            barDataKey={"sales count"}
            lineDataKey="avg sales count"
            additionalLineKey={["ma7 sales count"]}
          />
          <ChartBox
            xAxisDataKey={"day"}
            areaDataKey={"cum sales count"}
            title={
              certainCollectionNFTSellingNames[1] +
              " [" +
              pageData.collectionName +
              "]"
            }
            baseSpan={1}
            customColor={colors[0]}
            queryLink={certainCollectionNFTSelling.key}
            data={pageData.certainCollectionNFTSelling}
          />
          <StackedAreaChart
            values={pageData.certainCollectionNFTSelling}
            queryLink={certainCollectionNFTSelling.key}
            modalInfo=""
            title={
              certainCollectionNFTSellingNames[3] +
              " [" +
              pageData.collectionName +
              "]"
            }
            baseSpan={3}
            dataKey="day"
            oyLabel=""
            oxLabel=""
            labels={[
              {
                key: "unique buyers",
                color: colors[0],
              },
              {
                key: "unique sellers",
                color: colors[1],
              },
            ]}
          />
          <LineChartWithBar
            data={pageData.certainCollectionNFTSelling}
            queryLink={certainCollectionNFTSelling.key}
            title={
              certainCollectionNFTSellingNames[2] +
              " [" +
              pageData.collectionName +
              "]"
            }
            baseSpan={2}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="day"
            barDataKey={"sales volume"}
            lineDataKey="avg sales volume"
            additionalLineKey={["ma7 sales volume"]}
          />
          <ChartBox
            xAxisDataKey={"day"}
            areaDataKey={"cum sales volume"}
            title={
              certainCollectionNFTSellingNames[4] +
              " [" +
              pageData.collectionName +
              "]"
            }
            baseSpan={1}
            customColor={colors[0]}
            queryLink={certainCollectionNFTSelling.key}
            data={pageData.certainCollectionNFTSelling}
          />

          <LineChartWithBar
            data={pageData.certainCollectionNFTSelling}
            queryLink={certainCollectionNFTSelling.key}
            title={
              certainCollectionNFTSellingNames[5] +
              " [" +
              pageData.collectionName +
              "]"
            }
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="day"
            barDataKey={"avg nft price"}
            lineDataKey="total avg nf price"
          />

          <HeaderSection title="Marketplaces Comparison" />
          <DonutChart
            queryLink={certainCollectionMarketplacesComparison.key}
            data={pageData.certainCollectionMarketplacesComparison}
            modalInfo=""
            baseSpan={1}
            title={
              certainCollectionMarketplacesComparisonNames[1] +
              " [" +
              pageData.collectionName +
              "]"
            }
            nameKey="marketplace"
            dataKey="sales count"
          />
          <DonutChart
            queryLink={certainCollectionMarketplacesComparison.key}
            data={pageData.certainCollectionMarketplacesComparison}
            modalInfo=""
            baseSpan={1}
            title={
              certainCollectionMarketplacesComparisonNames[0] +
              " [" +
              pageData.collectionName +
              "]"
            }
            nameKey="marketplace"
            dataKey="sales volume"
          />

          {[
            "daily sales count",
            "daily sales volume (in usd)",
            "daily unique buyers",
            "daily unique sellers",
            "daily nft price (in usd)",
          ].map((value, index) => (
            <BarGraph
              values={
                pageData.certainCollectionMarketplacesComparisonDailyAverage
              }
              queryLink={
                certainCollectionMarketplacesComparisonDailyAverage.key
              }
              isNotDate
              modalInfo=""
              title={
                certainCollectionMarketplacesComparisonDailyAverageNames[
                  index
                ] +
                " [" +
                pageData.collectionName +
                "]"
              }
              baseSpan={1}
              dataKey="marketplace"
              oyLabel=""
              oxLabel="marketplace"
              hideLegend
              labels={[
                {
                  key: value,
                  color: colors[index],
                },
              ]}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default NFT;
