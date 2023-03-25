import { useList } from "@refinedev/core";
import { Typography, Box, Stack } from "@mui/material";

import {
    PieChart,
    PropertyReferrals,
    TotalRevenue,
    PropertyCard,
} from "./../components";

import { buildingIcon } from "../assets";
import { platform } from "os";

const Home = () => {

    function getSumInvestmentsByPlatform(userInvestments: any) {
        let totalInvestedAmount: { [platformName: string]: number } = {};
        for (let i = 0; i < userInvestments.length; i++) {
            if (userInvestments[i].platform in totalInvestedAmount) {
                totalInvestedAmount[userInvestments[i].platform] += userInvestments[i].investedAmount;
            } else {
                totalInvestedAmount[userInvestments[i].platform] = userInvestments[i].investedAmount;
            }
        }
        console.log(totalInvestedAmount);
        return totalInvestedAmount;
    }

    function getTotalYearYield(userInvestments: any) {
        let totalYearYield = 0;
        for (let i = 0; i < userInvestments.length; i++) {
            totalYearYield += userInvestments[i].investedAmount*(0.01)*userInvestments[i].yearYield;
        }
        console.log(totalYearYield);
        return Number(totalYearYield.toFixed(2));
    }

    function getTotalPercentageYield(userInvestments: any) {
        let totalYearYield = 0;
        let totalPercentageYield = 0;
        for (let i = 0; i < userInvestments.length; i++) {
            totalYearYield += userInvestments[i].investedAmount;
        }
        for (let i = 0; i < userInvestments.length; i++) {
            totalPercentageYield += userInvestments[i].yearYield*(userInvestments[i].investedAmount/totalYearYield);
        }
        console.log(totalPercentageYield);
        return Number(totalPercentageYield.toFixed(2));
    }

    function getTotalPercentageYieldByPlatform(userInvestments: any) {
        let totalYearYield: { [platformName: string]: number } = {};
        let totalPercentageYield: { [platformName: string]: number } = {};
        for (let i = 0; i < userInvestments.length; i++) {
            if (userInvestments[i].platform in totalYearYield) {
                totalYearYield[userInvestments[i].platform] += userInvestments[i].investedAmount;
            } else {
                totalYearYield[userInvestments[i].platform] = userInvestments[i].investedAmount;
            }
        }
        for (let i = 0; i < userInvestments.length; i++) {
            if (userInvestments[i].platform in totalPercentageYield) {
                totalPercentageYield[userInvestments[i].platform] +=
                userInvestments[i].yearYield*(userInvestments[i].investedAmount/totalYearYield[userInvestments[i].platform]);
                totalPercentageYield[userInvestments[i].platform] = Number(totalPercentageYield[userInvestments[i].platform].toFixed(2));

            } else {
                totalPercentageYield[userInvestments[i].platform] =
                userInvestments[i].yearYield*(userInvestments[i].investedAmount/totalYearYield[userInvestments[i].platform]);
                totalPercentageYield[userInvestments[i].platform] = Number(totalPercentageYield[userInvestments[i].platform].toFixed(2));
            }
        }
        console.log(totalPercentageYield);
        return totalPercentageYield;
    }

    function getTotalProjectsByPlatform(userInvestments: any) {
        let totalProjects: { [platformName: string]: number } = {};

        for (let i = 0; i < userInvestments.length; i++) {
            if (userInvestments[i].platform in totalProjects) {
                totalProjects[userInvestments[i].platform] += 1;
            } else {
                totalProjects[userInvestments[i].platform] = 1;
            }
        }
        console.log(totalProjects);
        return totalProjects;
    }

    function getTotalYearYieldByPlatform(userInvestments: any) {
        let totalProjects: { [platformName: string]: number } = {};

        for (let i = 0; i < userInvestments.length; i++) {
            if (userInvestments[i].platform in totalProjects) {
                totalProjects[userInvestments[i].platform] += userInvestments[i].yearYield*userInvestments[i].investedAmount*(0.01);
            } else {
                totalProjects[userInvestments[i].platform] = userInvestments[i].yearYield*userInvestments[i].investedAmount*(0.01);
            }
        }
        console.log(totalProjects);
        return totalProjects;
    }

    var dynamicColors = function() {
        var r = 0;
        var g = Math.floor(Math.random() * 255);
        var b = 255;
        return "rgb(" + r + "," + g + "," + b + ")";
     };


    function getListOfColors(numberColors: number) {
        let listColors = [];
        for (let i = 0; i < numberColors; i++) {
            listColors[i] = dynamicColors();
        }
        return listColors;
    }

    function getColorList(totalByPlatform: any) {
        let totalByPlatformKeys = Object.keys(totalByPlatform)
        let listColors = [];
        for (let i = 0; i < totalByPlatformKeys.length; i++) {
            switch (totalByPlatformKeys[i]) {
                case 'Bricks':
                    listColors[i] = "#ff8c00";
                    break;
                case 'RealT':
                    listColors[i] = "#00008b";
                    break;
                case 'LANDE':
                    listColors[i] = "#00ced1";
                    break;
                case 'Clubfunding':
                    listColors[i] = "#dc143c";
                    break;
                case 'Enerfip':
                    listColors[i] = "#FAD765";
                    break;
                case 'Lymo':
                    listColors[i] = "#696969";
                    break;
                case 'Upstone':
                    listColors[i] = "#6EA0E0";
                    break;
                case 'Baltis':
                    listColors[i] = "#ABF76D";
                    break;
                default:
                    listColors[i] = "#a9a9a9";
                    break;
            }
        }
        return listColors;
    }

    const { data, isLoading, isError } = useList({
        resource: "properties"
    });

    const userInvestments = data?.data ?? [];

    const totalInvestedAmount = getSumInvestmentsByPlatform(userInvestments);
    const totalYearYield = getTotalYearYield(userInvestments);
    const totalPercentageYield = getTotalPercentageYield(userInvestments);
    const totalPercentageYieldByPlatform = getTotalPercentageYieldByPlatform(userInvestments);
    const totalYearYieldByPlatform = getTotalYearYieldByPlatform(userInvestments);
    const totalProjectsByPlatform = getTotalProjectsByPlatform(userInvestments);

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Something went wrong!</Typography>;

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                Dashboard
            </Typography>

            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="Nombre d'investissements en cours"
                    value={Object.values(totalProjectsByPlatform).reduce((partialSum, a) => partialSum + a, 0).toString()}
                    series={Object.values(totalProjectsByPlatform)}
                    labels={Object.keys(totalProjectsByPlatform)}
                    colors={getColorList(totalProjectsByPlatform)}
                />
                <PieChart
                    title="Montant investi en cours"
                    value={Object.values(totalInvestedAmount).reduce((partialSum, a) => partialSum + a, 0).toString() + " €"}
                    series={Object.values(totalInvestedAmount)}
                    labels={Object.keys(totalInvestedAmount)}
                    colors={getColorList(totalProjectsByPlatform)}
                />
                <PieChart
                    title="Rendement du mois"
                    value={totalPercentageYield.toString() + "%"}
                    series={Object.values(totalPercentageYieldByPlatform)}
                    labels={Object.keys(totalPercentageYieldByPlatform)}
                    colors={getColorList(totalProjectsByPlatform)}
                />
                <PieChart
                    title="Revenus sur l'année"
                    value={totalYearYield.toString() + " €"}
                    series={Object.values(totalYearYieldByPlatform)}
                    labels={Object.keys(totalYearYieldByPlatform)}
                    colors={getColorList(totalYearYieldByPlatform)}
                />
            </Box>

            <Stack
                mt="25px"
                width="100%"
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <TotalRevenue />
            </Stack>

            <Box
                flex={1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
            >
                <Typography fontSize="18px" fontWeight={600} color="#11142d">
                    Mes Investissements
                </Typography>

                <Box
                    mt={2.5}
                    sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
                >
                    {userInvestments.map((property) => (
                        <PropertyCard
                            key={property._id}
                            id={property._id}
                            title={property.title}
                            platform={property.platform}
                            location={property.location}
                            investedAmount={property.investedAmount}
                            photo={buildingIcon}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
