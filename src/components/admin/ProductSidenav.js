import React, { useState } from "react";
import { Link } from "react-router-dom";
const ProductSidenav = () => {
  const [toggle, setToggle] = useState(false);

  const handleProduct = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="SideNav">
      <ul>
        <li>Home</li>
        <li onClick={handleProduct}>Products</li>
        {toggle && (
          <li>
            <ul>
              <li>
                <Link href="./">Add Product</Link>
              </li>
              <li>
                <Link href="./">View Product</Link>
              </li>
              <li>
                <Link href="./">Delete Product</Link>
              </li>
            </ul>
          </li>
        )}

        <li>
          <Link href="./"> Orders</Link>
        </li>
        <li>
          <Link href="./"> logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductSidenav;
