// import productDatabase from "@data/product-database";
// import NextImage from "next/image";
import React from "react";
import Box from "../Box";
import CategorySectionHeader from "../CategorySectionHeader";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Grid from "../grid/Grid";
// import Hidden from "../hidden/Hidden";
import ProductCard1 from "../product-cards/ProductCard1";
// import StyledProductCategory from "./ProductCategoryStyle";
import * as HomeAPIS from "api/Home";
import { useQuery } from 'react-query';
import { useStore } from "Store";

const Section6 = ({ }) => {
  // const [selected, setSelected] = useState("");

  const { searchTerm } = useStore();


  // const handleCategoryClick = ({ target: { id: brand } }) => {
  //   if (selected.match(brand)) {
  //     setSelected("");
  //   } else setSelected(brand);
  // };

  const {
    // refetch: getMapCenter,
    data: allTopics,
    // isSuccess: isSuccessMapCenter,
    // isError: isErrorMapCenter,
    // error: mapCenterError,
    isLoading: isTopicsLoading,
  } = useQuery("topics", () => HomeAPIS.getTopics(), {
    enabled: true,
    refetchOnWindowFocus: false,
  });

  // useEffect(() => {
  //   console.log(searchTerm)
  //   if (allTopics && allTopics.length > 0) {
  //     console.log(allTopics.filter((k) => k.title.indexOf(searchTerm) > -1))
  //   }
  // }, [searchTerm])

  console.log( isTopicsLoading)


  return (
    <Container mb="80px">
      <FlexBox>
        {/* <Hidden down={768} mr="1.75rem">
          <Box shadow={6} borderRadius={10} padding="1.25rem" bg="white">
            {brandList.map((brand, ind) => (
              <StyledProductCategory
                key={brand}
                id={brand}
                mb="0.75rem"
                bg={selected.match(brand) ? "white" : "gray.100"}
                shadow={selected.match(brand) ? 4 : null}
                onClick={handleCategoryClick}
              >
                <NextImage
                  width={20}
                  height={20}
                  layout="fixed"
                  objectFit="contain"
                  src={`/assets/images/logos/${ind % 2 === 0 ? "v" : "u"}.png`}
                  alt="apple"
                />
                <span className="product-category-title">{brand}</span>
              </StyledProductCategory>
            ))}

            <StyledProductCategory
              id="all"
              mt="4rem"
              bg={selected.match("all") ? "white" : "gray.100"}
              shadow={selected.match("all") ? 4 : null}
              onClick={handleCategoryClick}
            >
              <span id="all" className="product-category-title show-all">
                View All Brands
              </span>
            </StyledProductCategory>
          </Box>
        </Hidden> */}

        <Box flex="1 1 0" minWidth="0px">
          <CategorySectionHeader title="Topics" />
          <Grid container spacing={6}>
            {allTopics &&

              (
                searchTerm == '' ? allTopics.map((item, ind) => (
                  <Grid item lg={12} sm={12} xs={12} key={ind}>
                    <ProductCard1 hoverEffect {...item} />
                  </Grid>
                )) : allTopics.filter((k) => k.title.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1).map((item, ind) => (
                  <Grid item lg={12} sm={12} xs={12} key={ind}>
                    <ProductCard1 hoverEffect {...item} />
                  </Grid>
                )
                )
              )

            }
          </Grid>
        </Box>
      </FlexBox>
    </Container>
  );
};

// const brandList = ["zerrari", "fesla", "btw", "boyota", "gini", "lord"];

export default Section6;
