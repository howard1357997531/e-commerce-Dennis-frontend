import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

// Link 跟 a 的差別在於跳頁時 Link不會reload, <a>會
function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as={"div"}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as={"div"}>
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews}  reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>

        <Card.Text as={"h3"}>
          <div className="my-3">${product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
