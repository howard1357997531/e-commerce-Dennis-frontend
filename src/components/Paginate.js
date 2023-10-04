import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function Paginate({ pages, page, keyword = "", isAdmin = false }) {
  if (keyword) {
    keyword = keyword.split("?keyword=")[1].split("&")[0];
  }

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item active={x + 1 === page}>
            <Link
              key={x + 1}
              to={{
                pathname: !isAdmin ? "/" : "/admin/productlist/",
                search: `?keyword=${keyword}&page=${x + 1}`,
              }}
              style={{
                color: x + 1 === page ? "#fff" : "#000",
                display: "block",
                width: "100%",
                height: "100%",
                textDecoration: "none",
                padding: "6px 12px",
              }}
            >
              {x + 1}
            </Link>
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;

/* 
<Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={{
              pathname: "/",
              search: `?keyword=${keyword}&page=${x + 1}`,
            }}
          >
            <Pagination.Item active={x + 1 === page}>{x + 1} </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
*/

/* 用Link會導致案的地方很小 只有<a>範圍可以按 
<Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item active={x + 1 === page}>
            <Link
              key={x + 1}
              to={{
                pathname: "/",
                search: `?keyword=${keyword}&page=${x + 1}`,
              }}
              style={{
                color: x + 1 === page ? "#fff" : "#000",
                width: "100%",
                height: "100%",
              }}
            >
              {x + 1}
            </Link>
          </Pagination.Item>
        ))}
      </Pagination>
/*
用<a> 會 reload
<Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={x + 1}
            href={`/?keyword=${keyword}&page=${x + 1}`}
            active={x + 1 === page}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
*/
