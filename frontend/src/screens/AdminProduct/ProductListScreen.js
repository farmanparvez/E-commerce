import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openNotification } from "../../utils/notification";
import { getAdminProductProductByID } from "../../redux/actions/productAction";
import Modal from "./Modal";
import { reset, setModalVisible } from "../../redux/reducers/productReducer";
import Container from "../../components/Container";
import CommonTable from "../../components/CommonTable/CommonTable";
import Coloums from "./Coloums";
import { Button } from "antd";
import { PlusSquareTwoTone } from "@ant-design/icons";

import "./AdminProductList.scss";

const ProductListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const {
    isLoading,
    isSuccess,
    isError,
    isMessage,
    isRequestSuccess,
    isVisible,
    products,
  } = useSelector((state) => state.product);

  useEffect(() => {
    if (isSuccess) openNotification("success", "Success", isMessage);
    if (isError) openNotification("error", "Failed", isMessage);
    if (isRequestSuccess) dispatch(getAdminProductProductByID());
    return () => dispatch(reset());
  }, [isSuccess, isError, isMessage, isRequestSuccess, dispatch]);

  useEffect(() => {
    dispatch(getAdminProductProductByID());

    return () => dispatch(reset());
  }, [dispatch]);

  // console.log(coloums())
  // const handleTableChange = (newPagination, filters, sorter) => {
  //   fetchData({
  //     sortField: sorter.field,
  //     sortOrder: sorter.order,
  //     pagination: newPagination,
  //     ...filters,
  //   });
  // };

  const title = (
    <Fragment>
      <div className="title-container">
        <div className="title">
          <strong>
            <h3>Products</h3>
          </strong>
        </div>
        <div>
          <Button
            type="primary"
            icon={<PlusSquareTwoTone />}
            onClick={() =>
              dispatch(setModalVisible({ type: "create", visible: true }))
            }
          >
            Create Product
          </Button>
        </div>
      </div>
    </Fragment>
  );

  return (
    <Container>
      <div className="product-list-container">
        <CommonTable
          title={() => title}
          rowKey={(record) => record._id}
          loading={isLoading}
          columns={Coloums()}
          dataSource={products}
          // pagination={pagination}
          // onChange={handleTableChange}
        />
      </div>
      {isVisible.visible && <Modal />}
      {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
    </Container>
  );
};

export default ProductListScreen;
