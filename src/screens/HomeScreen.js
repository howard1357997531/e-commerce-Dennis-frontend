import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useLocation } from "react-router-dom";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";

function HomeScreen() {
  const location = useLocation();
  const dispatch = useDispatch();
  // state.productList: store.js const reducer = combineReducers({ productList: productListReducer });
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  const keyword = location.search;
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      {!keyword && <ProductCarousel />}
      <h1>Lastest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"} children={error} />
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
