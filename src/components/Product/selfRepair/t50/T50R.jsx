import { Link } from "react-router-dom";
import { ProductsWrap, SortWrap } from "../../../../pages/product/productStyle";
import T50RList from "./T50RList";
import { useEffect, useState } from "react";
import { t50repair } from "../../../../assets/api/productData";

const T50R = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const [sorted, setSorted] = useState("popular");

  const sortedData = () => {
    const sortData = [...t50repair];
    if (sorted === "popular") {
      return sortData.sort((a, b) => b.popularity - a.popularity);
    } else if (sorted === "latest") {
      return sortData.sort((a, b) => b.id - a.id);
    } else if (sorted === "highprice") {
      return sortData.sort((a, b) => b.price - a.price);
    } else if (sorted === "lowprice") {
      return sortData.sort((a, b) => a.price - b.price);
    }
  };

  return (
    <ProductsWrap>
      <ul className="subMenu">
        <li>제품</li>
        <li>
          <Link to={"/products"}>SELF-REPAIR</Link>
        </li>
        <li className="on">T50</li>
      </ul>
      <div className="subInner">
        <div>
          <img src="./images/products/selfrepair/t50Big.jpg" alt="t50repair" />
        </div>
        <SortWrap>
          <ul>
            <li
              onClick={() => setSorted("popular")}
              className={sorted === "popular" ? "on" : ""}
            >
              인기순
            </li>
            <li
              onClick={() => setSorted("latest")}
              className={sorted === "latest" ? "on" : ""}
            >
              신상품순
            </li>
            <li
              onClick={() => setSorted("highprice")}
              className={sorted === "highprice" ? "on" : ""}
            >
              높은가격순
            </li>
            <li
              onClick={() => setSorted("lowprice")}
              className={sorted === "lowprice" ? "on" : ""}
            >
              낮은가격순
            </li>
          </ul>
        </SortWrap>
        <T50RList t50repair={sortedData()} />
      </div>
    </ProductsWrap>
  );
};

export default T50R;
