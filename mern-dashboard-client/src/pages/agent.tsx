import { useList } from "@refinedev/core";
import { Box, Typography, Stack } from "@mui/material";

import { AgentCard, RadarChart } from "./../components";

const Agents = () => {
    const { data, isLoading, isError } = useList({ resource: "users" });

    const allAgents = data?.data ?? [];

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                Agents List
            </Typography>

            <Stack
                mt="25px"
                width="100%"
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <RadarChart />
            </Stack>

            <Box
                mt="20px"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    backgroundColor: "#fcfcfc",
                }}
            >
                {allAgents.map((agent) => (
                    <AgentCard
                        key={agent._id}
                        id={agent._id}
                        name={agent.name}
                        email={agent.email}
                        avatar={agent.avatar}
                        noOfProperties={agent.allProperties.length}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Agents;
