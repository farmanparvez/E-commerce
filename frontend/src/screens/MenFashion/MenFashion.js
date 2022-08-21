import React from "react";
import Container from "../../components/Container";
// import { getProductByType } from "../../redux/actions/userProductAction";
// import { useDispatch, useSelector } from "react-redux";
// import SpinContainer from "../../components/SpinContainer/SpinContainer";
// import Product from "../../components/ProductCard/Product";
import MenContent from "./MenContent";
import "./menStyle.scss";

const MenFashion = () => {
  // const { isLoading, isError, product } = useSelector(
  //   (state) => state.userProduct
  // );
  // console.log(product);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProductByType({ type: "male" }));
  // }, []);

  return (
    <Container>
      <MenContent />
    </Container>
  );
};

export default MenFashion;
