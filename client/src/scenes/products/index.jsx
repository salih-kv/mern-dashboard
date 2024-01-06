import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { useGetProductsQuery } from "../../state/api";
import { Product } from "./product";
import spinner from "../../assets/spinner.svg";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  let gridColumns;

  if (isLargeScreen) {
    gridColumns = 4;
  } else if (isMediumScreen) {
    gridColumns = 2;
  } else {
    gridColumns = 1;
  }

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns={`repeat(${gridColumns}, minmax(0, 1fr))`}
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
        >
          {data.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </Box>
      ) : (
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
      )}
    </Box>
  );
};

export default Products;
