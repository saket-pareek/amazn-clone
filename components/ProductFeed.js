import React from "react";
import Product from "../components/Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="px-5 space-y-10 md:space-y-0 grid grid-flow-row-dense md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 lg:-mt-48">
      {products.slice(0, 4).map(({ id, category, image, title, description, price }) => (
        <Product key={id} id={id} category={category} image={image} title={title} description={description} price={price} />
      ))}
      <img className="md:col-span-full mx-auto" src="https://links.papareact.com/dyz" alt="" />
      <div className="md:col-span-2">
        {products.slice(4, 5).map(({ id, title, price, description, category, image }) => (
          <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} />
        ))}
      </div>
      {products.slice(5, products.length).map(({ id, title, price, description, category, image }) => (
        <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} />
      ))}
    </div>
  );
};

export default ProductFeed;
