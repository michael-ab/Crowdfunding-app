import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@mui/material";

import { PieChartProps } from "./../../interfaces/home";

const PieChart = ({ title, value, series, labels, colors}: PieChartProps) => {
    return (
        <Box
            id="chart"
            flex={1}
            display="flex"
            bgcolor="#fcfcfc"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            pl={3.5}
            py={2}
            gap={2}
            borderRadius="15px"
            minHeight="110px"
            width="fit-content"
        >
            <Stack direction="column">
                <Typography fontSize={14} color="#808191">
                    {title}
                </Typography>
                <Typography
                    fontSize={24}
                    color="#11142d"
                    fontWeight={700}
                    mt={1}
                >
                    {value}
                </Typography>
            </Stack>

            <ReactApexChart
                options={{
                    chart: { type: "donut" },
                    colors,
                    legend: { show: true },
                    dataLabels: { enabled: false },
                    labels: labels,
                }}
                series={series}
                type="donut"
                width="300px"
            />
        </Box>
    );
};

export default PieChart;
