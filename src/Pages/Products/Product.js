import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  const {
    name,
    img,
    price,
    description,
    minOrder,
    available,
    paymennt,
    totalSell,
  } = product;
  return (
    <div>
      <div class="card card-side   bg-base-100 shadow-xl">
        <figure>
          <img className="w-44 h-60" src={img} alt={name} />
        </figure>
        <div class="card-body p-2">
          <h2 class="card-title text-base">{name}</h2>
          <p title={description} className="text-[14px] text-[#7f8c8d]">
            {description.slice(0, 90) + "..."}
          </p>
          <p className="font-semibold text-2xl">
            <span className="text-secondary ">${price}</span>{" "}
            <span className="text-xs">/ Piece</span>
          </p>
          <div className="text-xs flex justify-between">
            <p>
              Available:{" "}
              <span className="font-semibold text-green-400">{available}</span>
            </p>
            <p>
              Min-Order:{" "}
              <span className="font-semibold text-warning">{minOrder}</span>
            </p>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary  btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;