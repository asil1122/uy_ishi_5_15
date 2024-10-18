import styled from "@emotion/styled";
import { IconButton, TextField } from "@mui/material";
import { colors } from "../config/color";

export const CardWrap = styled.div`
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.1);
background-color: ${colors.white};
text-align: center;
`;

export const CardContent = styled.div`
padding: 15px 65px 17px 66px;
    text-align: center; 
    &:hover {
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.1);
        background-color: ${colors.sectionHover};
    }
`