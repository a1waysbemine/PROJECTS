import { Link } from "react-router-dom";
import { ContentWrap } from "../../../pages/product/productStyle";

const Study = () => {
  return (
    <ContentWrap>
      <div className="subInner">
        <h2>Study</h2>
        <ul>
          <li>
            <Link to={"/products/RINGO"}>
              <img src="./images/products/study/ringo.jpeg" alt="ringo" />
            </Link>
          </li>
          <li>
            <Link to={"/products/IBLE"}>
              <img src="./images/products/study/ible.jpeg" alt="ible" />
            </Link>
          </li>
        </ul>
      </div>
    </ContentWrap>
  );
};

export default Study;
