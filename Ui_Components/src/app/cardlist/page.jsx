"use client";
import Card from "@/components/card/Card";
import React, { useEffect, useState } from "react";

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage,setTotalPage] = useState(0)
  const featchApi = async () => {
    const api = await fetch(`https://dummyjson.com/products?limit=9&skip=${page*9-9}`);
    const data = await api.json();
    setProducts(data.products);
    setTotalPage(Math.floor(data.total/9))
  };
  useEffect(() => {
    featchApi();
    return ( clearInterval())
  }, [page]);

  const SetPageFun = (value) => {
    if (value > 0) {
      setPage(value);
    }
  };

  return (
    <div>
{    products.length>0 && <div style={{ width: "1200px", margin: "20px auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Card
                  title={product.title}
                  price={product.price}
                  thumbnail={product.thumbnail}
                />
              </div>
            );
          })}
        </div>
        <div
          style={{
            margin: "40px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <button
            style={{ cursor: "pointer", padding: "10px" }}
            onClick={() => {
              SetPageFun(page - 1);
            }}
            disabled={page === 1}
          >
            Left
          </button>
          {[...Array(totalPage)].map((_, index) => {
            return (
              <button
                style={{
                  padding: "10px",
                  gap: "5px",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "5px",
                }}
                key={index}
                onClick={() => {
                  SetPageFun(index + 1);
                }}
                disabled={page === index + 1}
              >
                {index + 1}
              </button>
            );
          })}
          <button
            style={{ cursor: "pointer", padding: "10px" }}
            onClick={() => {
              SetPageFun(page + 1);
            }}
            disabled={page == totalPage}
          >
            Right
          </button>
        </div>
      </div>}
    </div>
  );
};

export default CardList;
