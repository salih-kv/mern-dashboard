import { Box } from "@mui/material";
import spinner from "../assets/spinner.svg";

export const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={spinner} alt="spinner" width={500} />
    </Box>
  );
};
