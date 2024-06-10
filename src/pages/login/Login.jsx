import React from "react";
import { Flex, Col, Row } from "antd";
import logo from "../../assets/images/logo/logo.png";
import loginBanner from "../../assets/images/illustrators/login.png";
import styles from "./Login.module.css";
import CustomText from "../../components/common/text/CustomText";
import CustomInput from "../../components/common/input/CustomInput";
import CustomButton from "../../components/common/button/CustomButton";
import { useNavigate } from "react-router-dom";
import { SIGN_UP } from "../../routes/routesConstant";

const Login = () => {
  const navigate = useNavigate();

  const testNavigate = () => {
    navigate(SIGN_UP);
  }

  return (
    <div className={styles.loginPage}>
      <Flex vertical={true} justify="space-between" style={{ height: "100%" }}>
        <Row>
          <Col>
            <img src={logo} className={styles.logo} alt="logo" />
          </Col>
        </Row>
        <Row justify={"space-around"}>
          <Col span={12}>
            <img
              src={loginBanner}
              className={styles.loginBanner}
              alt="login-banner"
            />
          </Col>
          <Col span={5}>
            <Row justify={"center"} style={{ marginBottom: "7vh" }}>
              <Col>
                <CustomText size={"32px"} weight={"bold"}>
                  Sign In
                </CustomText>
              </Col>
            </Row>
            <Row style={{ marginBottom: "3vh" }}>
              <Col span={24}>
                <CustomInput placeholder={"username"} />
              </Col>
            </Row>
            <Row style={{ marginBottom: "3vh" }}>
              <Col span={24}>
                <CustomInput placeholder={"password"} />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <CustomButton value={"Submit"} onClick={testNavigate}/>
              </Col>
            </Row>
            <Row>
            <p className={styles.registerText}>Don’t Have an Account ? Sign Up Here.</p>
            </Row>
          </Col>
        </Row>
        <Row justify={"space-between"}>
          <Col>
            <p className={styles.footerText}>
              &copy; myPOS 2024 - Built by Fadlan
            </p>
          </Col>
        </Row>
      </Flex>
    </div>
  );
};

export default Login;
