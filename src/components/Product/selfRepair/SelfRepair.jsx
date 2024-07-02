import { Link } from "react-router-dom";
import { ContentWrap } from "../../../pages/product/productStyle";

const SelfRepair = () => {
  return (
    <ContentWrap>
      <div className="subInner">
        <h2>SELF-REPAIR</h2>
        <ul>
          <li>
            <Link to={"/products/T50_repair"}>
              <img src="./images/products/selfrepair/t50.jpeg" alt="t50" />
            </Link>
          </li>
          <li>
            <Link to={"/products/T20_repair"}>
              <img src="./images/products/selfrepair/t20.jpeg" alt="t20" />
            </Link>
          </li>
          <li>
            <Link to={"/products/Ringo_repair"}>
              <img src="./images/products/selfrepair/ringo.jpeg" alt="ringo" />
            </Link>
          </li>
          <li>
            <Link to={"/products/CASTER"}>
              <img
                src="./images/products/selfrepair/caster.jpeg"
                alt="caster"
              />
            </Link>
          </li>
        </ul>
      </div>
    </ContentWrap>
  );
};

export default SelfRepair;
