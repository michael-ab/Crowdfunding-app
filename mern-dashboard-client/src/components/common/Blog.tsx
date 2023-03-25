import { Email, Phone, Place } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

import { ProfileProps, PropertyProps } from "./../../interfaces/common";
import PropertyCard from "./PropertyCard";

import { buildingIcon } from "../../assets";

function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}

const Blog = () => (
    <Box>
        <Typography fontSize={25} fontWeight={700} color="#11142D">
            Blog
        </Typography>

        {/* {properties.length > 0 && (
            <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC">
                <Typography fontSize={18} fontWeight={600} color="#11142D">
                    Properties
                </Typography>

                <Box
                    mt={2.5}
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2.5,
                    }}
                >
                    {properties?.map((property: PropertyProps) => (
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
        )} */}
    </Box>
);

export default Blog;
