import { Link } from "react-router-dom";
import { ContentWrap } from "../../../pages/product/productStyle";

const WorknMore = () => {
  return (
    <ContentWrap>
      <div className="subInner">
        <h2>WORK & MORE</h2>
        <ul>
          <li>
            <Link to={"/products/EGA"}>
              <img src="./images/products/worknmore/ega.jpeg" alt="ega" />
            </Link>
          </li>
          <li>
            <Link to={"/products/BUTTON"}>
              <img src="./images/products/worknmore/button.jpeg" alt="button" />
            </Link>
          </li>
          <li>
            <Link to={"/products/MANE"}>
              <img src="./images/products/worknmore/mane.jpeg" alt="mane" />
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

export default WorknMore;
