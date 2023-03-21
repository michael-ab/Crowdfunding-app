import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import { Button } from "@mui/material";

import { logo, yariga, crowdfundingLogo } from "./../../../assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={crowdfundingLogo} alt="Yariga" width="28px" />
                ) : (
                    <img src={crowdfundingLogo} alt="Refine" width="140px" />
                )}
            </Link>
        </Button>
    );
};
