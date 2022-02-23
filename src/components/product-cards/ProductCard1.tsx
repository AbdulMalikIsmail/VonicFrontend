import ProductIntro from "@component/products/ProductIntro";
import { useAppContext } from "@context/app/AppContext";
// import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useStore } from "store";
import { CSSProperties } from "styled-components";
import Box from "../Box";
import Button from "../buttons/Button";
import Card, { CardProps } from "../Card";
// import { Chip } from "../Chip";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Modal from "../modal/Modal";
// import Rating from "../rating/Rating";
import { H3, SemiSpan } from "../Typography";
import { StyledProductCard1 } from "./ProductCardStyle";

export interface ProductCard1Props extends CardProps {
  className?: string;
  style?: CSSProperties;
  imgUrl?: string;
  title?: string;
  price?: number;
  description?: string;
  off?: number;
  rating?: number;
  id?: string | number;
  // className?: string;
  // style?: CSSProperties;
  // imgUrl: string;
  // title: string;
  // price: number;
  // off: number;
  // rating?: number;
  // subcategories?: Array<{
  //   title: string;
  //   url: string;
  // }>;
}

const ProductCard1: React.FC<ProductCard1Props> = ({
  id,
  imgUrl,
  title,
  price,
  description,
  off,
  rating,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [cartItem, setCartItem] = useState(null);

  const { cartList, updateCart } = useStore();

  useEffect(() => {
    let item = null
    if (cartList && cartList.length > 0){
      item = cartList.find((k) => k.id === id);
    }
    setCartItem(item)
    
  }, [cartList])



  const toggleDialog = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const handleCartAmountChange = (amount) => {
    let cartListTmp = [...cartList]
    if (cartItem) {
      let index = cartList.findIndex((item) => item.id === id);
      cartListTmp[index].qty = amount
    } else {
      cartListTmp.push({
        id: id,
        name: title,
        qty: amount
      })
    }
    updateCart([...cartListTmp])
    console.log(cartList, cartListTmp)

  }

  return (
    <StyledProductCard1 {...props}>
      <div className="details">
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr="0.5rem">
            {/* <Link href={`/product/${id}`}>
              <a> */}
            <H3
              className="title"
              fontSize="14px"
              textAlign="left"
              fontWeight="600"
              color="text.secondary"
              mb="10px"
              title={title}
            >
              {title}
            </H3>
            {/* </a>
            </Link> */}

            {/* <Rating value={rating || 0} outof={5} color="warn" readonly /> */}

            <FlexBox alignItems="center" mt="10px">
              <SemiSpan pr="0.5rem" fontWeight="600" color="primary.main">
                {/* ${(price - (price * off) / 100).toFixed(2)} */}
                {description}
              </SemiSpan>
              {/* {!!off && (
                <SemiSpan color="text.muted" fontWeight="600">
                  <del>{price?.toFixed(2)}</del>
                </SemiSpan>
              )} */}
            </FlexBox>
          </Box>

          <FlexBox
            flexDirection="column-reverse"
            alignItems="center"
            justifyContent={!!cartItem?.qty ? "space-between" : "flex-start"}
            width="30px"
          >
            {/* <div className="add-cart"> */}
            <Button
              variant="outlined"
              color="primary"
              padding="3px"
              size="none"
              borderColor="primary.light"
              onClick={ () => handleCartAmountChange((cartItem?.qty || 0) + 1)}
            >
              <Icon variant="small">plus</Icon>
            </Button>

            {!!cartItem?.qty && (
              <Fragment>
                <SemiSpan color="text.primary" fontWeight="600">
                  {cartItem?.qty}
                </SemiSpan>
                <Button
                  variant="outlined"
                  color="primary"
                  padding="3px"
                  size="none"
                  borderColor="primary.light"
                  onClick={() => handleCartAmountChange(cartItem?.qty - 1)}
                >
                  <Icon variant="small">minus</Icon>
                </Button>
              </Fragment>
            )}
          </FlexBox>
        </FlexBox>
      </div>

      {/* <Modal open={open} onClose={toggleDialog}>
        <Card p="1rem" position="relative">
          <ProductIntro imgUrl={[imgUrl]} title={title} price={price} id={id} />
          <Box
            position="absolute"
            top="0.75rem"
            right="0.75rem"
            cursor="pointer"
          >
            <Icon
              className="close"
              color="primary"
              variant="small"
              onClick={toggleDialog}
            >
              close
            </Icon>
          </Box>
        </Card>
      </Modal> */}
    </StyledProductCard1>
  );
};

ProductCard1.defaultProps = {
  id: "324321",
  title: "KSUS ROG Strix G15",
  imgUrl: "/assets/images/products/macbook.png",
  off: 50,
  price: 450,
  rating: 0,
  description: ''
};

export default ProductCard1;
