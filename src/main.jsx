import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { COLOR_PRIMARY } from "./constants/propertiesConstant.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider theme={{
    components: {
      Input:{
        inputFontSize: 16,
        paddingBlock: 10,
        paddingInline: 15
      },
      Button: {
        paddingBlock: 20,
        contentLineHeight: 0,
        contentFontSize: 16,
        contentFontSizeLG: 24
      }
    },
    token: {
      colorBorder: COLOR_PRIMARY,
      colorPrimary: COLOR_PRIMARY,
      borderRadius: 15,
      fontFamily: 'Poppins'
    }
  }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
