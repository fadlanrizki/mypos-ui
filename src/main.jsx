import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { COLOR_PRIMARY } from "./constants/propertiesConstant.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      components: {
        Input: {
          inputFontSize: 16,
          inputFontSizeLG: 32,
          paddingBlock: 10,
          // paddingBlockLG: 18,
          paddingInline: 15,
          paddingInlineLG: 26,
        },
        Button: {
          paddingBlock: 10,
          contentLineHeight: 0,
          contentFontSize: 16,
          contentFontSizeLG: 32,
          defaultBg: COLOR_PRIMARY,
        },
        Table: {
          headerColor: '#fff',
          headerBg: COLOR_PRIMARY,
          cellFontSize: 24
        }
      },
      token: {
        colorBorder: COLOR_PRIMARY,
        colorPrimary: COLOR_PRIMARY,
        borderRadius: 15,
        fontFamily: "Poppins",
      },
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
