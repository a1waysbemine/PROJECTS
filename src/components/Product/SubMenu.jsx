import { SubMenuUl } from "../../pages/product/productStyle";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../store/modules/productSlice";

const SubMenu = () => {
  const { category } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  return (
    <SubMenuUl>
      <li className="title">PRODUCTS</li>
      <li
        onClick={() => {
          dispatch(changeCategory(0));
        }}
        className={category === 0 ? "on" : ""}
      >
        WORK
      </li>
      <li
        onClick={() => {
          dispatch(changeCategory(1));
        }}
        className={category === 1 ? "on" : ""}
      >
        WORK & MORE
      </li>
      <li
        onClick={() => {
          dispatch(changeCategory(2));
        }}
        className={category === 2 ? "on" : ""}
      >
        GAMING
      </li>
      <li
        onClick={() => {
          dispatch(changeCategory(3));
        }}
        className={category === 3 ? "on" : ""}
      >
        STUDY
      </li>
      <li
        onClick={() => {
          dispatch(changeCategory(4));
        }}
        className={category === 4 ? "on" : ""}
      >
        for KIDS
      </li>
      <li
        onClick={() => {
          dispatch(changeCategory(5));
        }}
        className={category === 5 ? "on" : ""}
      >
        SEAT BOOSTER
      </li>
      <li
        onClick={() => {
          dispatch(changeCategory(6));
        }}
        className={category === 6 ? "on" : ""}
      >
        SELF-REPAIR
      </li>
    </SubMenuUl>
  );
};

export default SubMenu;
