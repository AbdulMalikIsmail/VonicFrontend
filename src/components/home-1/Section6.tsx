// import productDatabase from "@data/product-database";
// import NextImage from "next/image";
import React, { useState, useEffect } from "react";
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
import { useStore } from "../../Store";
import Accordion from "@component/accordion/Accordion";
import AccordionHeader from "@component/accordion/AccordionHeader";
import { SemiSpan } from "@component/Typography";

const Section6 = ({ }) => {
  // const [selected, setSelected] = useState("");

  const { searchTerm } = useStore();
  const [topicList, setTopicsList] = useState([])

  const [filteredTopics, setFilteredList] = useState([])

  useEffect(() => {
    console.log(searchTerm)
    let filterlist = topicList.map((topics) =>  {
      let re = new RegExp(searchTerm, 'gi');
      let filter = topics.subtopics.filter((k) => k.title.match(re))
      if (filter.length > 0){
        return {
          ...topics,
          subtopics : filter
        }
      }
    }).filter((k) => k)
    // Filtered the ones which has data in it
    console.log(topicList, filterlist)
    setFilteredList(filterlist)
    
  },[searchTerm])


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

  useEffect(() => {
    // console.log(allTopics)
    if (allTopics && allTopics['data']) {
      setTopicsList(allTopics['data'])
    }
  }, [allTopics])

  console.log(allTopics, isTopicsLoading)


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
            {topicList &&

              (
                searchTerm == '' ? topicList.map((item, ind) => item.subtopics && (
                  <Grid item lg={12} sm={12} xs={12} key={ind} spacing={6}>
                    <Accordion key={item.title} expanded>
                      <AccordionHeader
                        px="16px"
                        py="16px"
                        color="text.muted"
                      // justifyContent="flex-start"
                      >
                        <SemiSpan className="cursor-pointer" mr="9px">
                          {item.title}
                        </SemiSpan>
                      </AccordionHeader>
                      {item.subtopics.map((subitem, indInner) => (
                        <Grid item lg={12} sm={12} xs={12} key={indInner} style={{marginTop:6, marginBottom:6}}>
                          <ProductCard1 hoverEffect {...subitem} />
                        </Grid>
                      ))}
                    </Accordion>
                  </Grid>
                )) : filteredTopics.map((item, ind) => item.subtopics && (
                  <Grid item lg={12} sm={12} xs={12} key={ind} spacing={6}>
                    <Accordion key={item.title} expanded>
                      <AccordionHeader
                        px="16px"
                        py="16px"
                        color="text.muted"
                      // justifyContent="flex-start"
                      >
                        <SemiSpan className="cursor-pointer" mr="9px">
                          {item.title}
                        </SemiSpan>
                      </AccordionHeader>
                      {item.subtopics.map((subitem, indInner) => (
                        <Grid item lg={12} sm={12} xs={12} key={indInner} style={{marginTop:6, marginBottom:6}}>
                          <ProductCard1 hoverEffect {...subitem} />
                        </Grid>
                      ))}
                    </Accordion>
                  </Grid>
                ))
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
