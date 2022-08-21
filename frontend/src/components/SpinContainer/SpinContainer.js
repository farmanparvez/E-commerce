import React, { Fragment } from "react";
import { Empty, Spin, Result } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./spin.scss"
const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: "#000" }} spin />
);


const SpinContainer = (props) => {
  return (
    <div className={`${props.spinStyle}`}>
      <Spin {...props} indicator={antIcon} className={`${props.spinStyle}`}>
        <Fragment>
          {!props?.isError &&
            props.value &&
            props?.data?.length > 0 &&
            props.children}
          {!props.isError && !props.value && props.children}
          {props.isError && (
            <Result
              status="500"
              title="500"
              subTitle="Sorry, something went wrong."
              // extra={<Button type="primary">Back Home</Button>}
            />
          )}
          {/* <div className="empty-container" > */}
            {!props.spinning &&
              props.value &&
              !props.isError &&
              props?.data?.length === 0 && <Empty />}
          {/* </div> */}
        </Fragment>
      </Spin>
    </div>
  );
};

export default SpinContainer;
