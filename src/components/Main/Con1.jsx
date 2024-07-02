import { Con1Wrap } from "./ContentStyle";

const Con1 = ({ goProduct, navigate }) => {
  return (
    <Con1Wrap>
      <div className="inner">
        <h2>WORK</h2>

        <span className="more" onClick={() => goProduct(0)}>
          ALL PRODUCTS
        </span>
        <ul className="list">
          <li>
            <img
              src="./images/main/con1_img1.jpg"
              alt=""
              onClick={() => navigate("/products/T90")}
            />
            <h3>T90</h3>
            <strong>Performance Ergonomic</strong>
          </li>
          <li>
            <img
              src="./images/main/con1_img2.jpg"
              alt=""
              onClick={() => navigate("/products/T80")}
            />
            <h3>T80</h3>
            <strong>Tailored Chair</strong>
          </li>
          <li>
            <img
              src="./images/main/con1_img3.jpg"
              alt=""
              onClick={() => navigate("/products/T50")}
            />
            <h3>T50</h3>
            <strong>좋은 의자의 기준</strong>
          </li>
          <li>
            <img
              src="./images/main/con1_img4.jpg"
              alt=""
              onClick={() => navigate("/products/T20")}
            />
            <h3>T20</h3>
            <strong>Perfection for Everyone</strong>
          </li>
        </ul>
      </div>
    </Con1Wrap>
  );
};

export default Con1;
