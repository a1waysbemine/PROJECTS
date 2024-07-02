import { Link } from "react-router-dom";
import { ContentWrap } from "../../../pages/product/productStyle";

const Work = () => {
  return (
    <ContentWrap>
      <div className="subInner">
        <h2>WORK</h2>
        <ul>
          <li>
            <Link to={"/products/T90"}>
              <img src="./images/products/work/t90.jpeg" alt="t90" />
            </Link>
          </li>
          <li>
            <Link to={"/products/T80"}>
              <img src="./images/products/work/t80.jpeg" alt="t80" />
            </Link>
          </li>
          <li>
            <Link to={"/products/T55"}>
              <img src="./images/products/work/t55.jpeg" alt="t55" />
            </Link>
          </li>
          <li>
            <Link to={"/products/T50_Air"}>
              <img src="./images/products/work/t50_air.jpeg" alt="t50_air" />
            </Link>
          </li>
          <li>
            <Link to={"/products/T50"}>
              <img src="./images/products/work/t50.jpeg" alt="t50" />
            </Link>
          </li>
          <li>
            <Link to={"/products/LINIE"}>
              <img src="./images/products/work/linie.jpeg" alt="linie" />
            </Link>
          </li>
          <li>
            <Link to={"/products/T20"}>
              <img src="./images/products/work/t20.jpeg" alt="t20" />
            </Link>
          </li>
          <li>
            <p></p>
          </li>
        </ul>
      </div>
    </ContentWrap>
  );
};

export default Work;
