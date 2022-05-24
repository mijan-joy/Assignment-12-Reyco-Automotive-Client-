import React, { useEffect, useState } from "react";
import DeleteProductModal from "./DeleteProductModal";

const MangeProducts = () => {
  const [products, setProducts] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/products", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div>
      <h2>{products.length}</h2>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Photo</th>
                <th>Item</th>
                <th>Available</th>
                <th>Price</th>
                <th>Total-Sell</th>
                <th>Min-Order</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={p._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div class="avatar">
                      <div class="w-8 rounded">
                        <img src={p?.img} alt="img" />
                      </div>
                    </div>
                  </td>
                  <td>{p?.name}</td>
                  <td>{p?.available}</td>
                  <td>{p?.price}</td>
                  <td>{p?.totalSell}</td>
                  <td>{p?.minOrder}</td>
                  <td>
                    <label
                      onClick={() => setDeleteProduct(p)}
                      for="delete-manage-product"
                      className="btn  btn-xs btn-error modal-button"
                    >
                      Remove
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {deleteProduct && (
          <DeleteProductModal
            deleteProduct={deleteProduct}
            setDeleteProduct={setDeleteProduct}
          ></DeleteProductModal>
        )}
      </div>
    </div>
  );
};

export default MangeProducts;
