import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Image } from "react-bootstrap";
import { listTopProducts } from "../actions/productActions";
import Loader from "./Loader";
import Message from "./Message";
import { Link } from "react-router-dom";

function ProductCarousel() {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant={"danger"}>{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-dark">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image
              src={product.image}
              alt={product.image}
              fluid
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <Carousel.Caption className="carousel.caption">
              <h4>
                {product.name} (${product.price})
              </h4>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
