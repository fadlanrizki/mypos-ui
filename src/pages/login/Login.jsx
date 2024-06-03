import React from "react";
import { Flex, Col, Row } from "antd";
import logo from "../../assets/images/logo/logo.png";
import loginBanner from "../../assets/images/illustrators/login.svg";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <Flex vertical>
        <Row>
          <Col>
            <img src={logo} className={styles.logo} alt="logo" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <img
              src={loginBanner}
              className={styles.loginBanner}
              alt="login-banner"
            />
          </Col>
          <Col span={12}>

          </Col>
        </Row>
        <Row>
          <Col>
          <p className={styles.footerText}>&copy; myPOS 2024 - Built by Fadlan</p>
          </Col>
          <Col>
          <p className={styles.registerText}></p>
          </Col>
        </Row>
        
      </Flex>
    </div>
  );
};

export default Login;