import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [LatestProducts, setLatestProducts] = useState([]);
  console.log(products);
  console.log("dfasdf", LatestProducts);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={"Latest"} text2={"Collections"}></Title>

          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-650">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quas ipsam quae iure sunt culpa odio id est illo quibusdam porro,
            esse veritatis velit.
          </p>
        </div>

        <div className="  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {console.log("latest", LatestProducts)}
          {LatestProducts.map((item, index) => (
            
            <ProductItem
              key={item._id ?? index}
              _id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestCollection;
