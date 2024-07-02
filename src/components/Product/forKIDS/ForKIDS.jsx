import { Link } from "react-router-dom";
import { ContentWrap } from "../../../pages/product/productStyle";

const ForKIDS = () => {
  return (
    <ContentWrap>
      <div className="subInner">
        <h2>for KIDS</h2>
        <ul>
          <li>
            <Link to={"/products/molti"}>
              <img src="./images/products/forkids/molti.jpeg" alt="molti" />
            </Link>
          </li>
          <li>
            <Link to={"/products/atti"}>
              <img src="./images/products/forkids/atti.jpeg" alt="atti" />
            </Link>
          </li>
        </ul>
      </div>
    </ContentWrap>
  );
};

export default ForKIDS;
