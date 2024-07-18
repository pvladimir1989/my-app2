import { Paper } from "@mui/material";
import styled from "@emotion/styled";

export const Item = styled(Paper)(({ theme }) => {
  console.log(theme);
  return {
    textAlign: "center",
    color: "red",
  };
});
