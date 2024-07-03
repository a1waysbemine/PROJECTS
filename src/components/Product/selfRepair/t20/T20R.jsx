import { Link } from "react-router-dom";
import { ProductsWrap, SortWrap } from "../../../../pages/product/productStyle";
import T20RList from "./T20RList";
import { useEffect, useState } from "react";
import { t20repair } from "../../../../assets/api/productData";

const T20R = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const [sorted, setSorted] = useState("popular");

  const sortedData = () => {
    const sortData = [...t20repair];
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
        <li className="on">T20</li>
      </ul>
      <div className="subInner">
        <div>
          <img src="./images/products/selfrepair/t20Big.jpg" alt="t20repair" />
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
        <T20RList t20repair={sortedData()} />
      </div>
    </ProductsWrap>
  );
};

export default T20R;
