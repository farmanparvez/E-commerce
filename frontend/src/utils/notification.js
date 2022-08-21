// import React from "react";
import { notification } from "antd";

export const openNotification = (type, status, message) => {
  notification[type]({
    message: status,
    description: message,
  });
};
