import { Col, Flex, Row } from "antd";
import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo/logo.png";
import signUpBanner from "../../assets/images/illustrators/signup.png";
import CustomText from "../../components/common/text/CustomText";
import { COLOR_PRIMARY } from "../../constants/propertiesConstant";
import CustomInput from "../../components/common/input/CustomInput";
import CustomButton from "../../components/common/button/CustomButton";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../routes/routesConstant";

const Container = styled.div`
  height: 100vh;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 187px;
  height: 65px;
`;

const LogoContainer = styled.div`
  background-color: #fff;
  padding: 5vh 10vh;
  border-radius: 0 0 50px 0;
`;

const SignUp = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate(SIGN_IN);
  };

  return (
    <Container>
      <Row>
        <Col
          span={13}
          style={{ background: `${COLOR_PRIMARY}`, height: "100vh" }}
        >
          <Flex vertical justify="space-between" style={{ height: "100%" }}>
            <Row>
              <Col>
                <LogoContainer>
                  <Logo src={logo} alt="logo" />
                </LogoContainer>
              </Col>
            </Row>
            <Row justify={"center"}>
              <Col>
                <img src={signUpBanner} alt="banner" />
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ padding: "5vh 10vh" }}>
                <CustomText size={"16"} weight={"bold"} color={"#fff"}>
                  © myPOS 2024 - Built by Fadlan
                </CustomText>
              </Col>
            </Row>
          </Flex>
        </Col>
        <Col span={11}>
          <Flex
            vertical
            justify="center"
            style={{
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            <Row justify={"center"}>
              <Col span={14}>
                <Row justify={"center"} style={{ marginBottom: "5vh" }}>
                  <Col>
                    <CustomText size={"32"} weight={"bold"}>
                      Sign Up
                    </CustomText>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "3vh" }}>
                  <Col span={24}>
                    <CustomInput placeholder={"Fullname"} />
                  </Col>
                </Row>
                <Row style={{ marginBottom: "3vh" }}>
                  <Col span={24}>
                    <CustomInput placeholder={"Username"} />
                  </Col>
                </Row>
                <Row style={{ marginBottom: "3vh" }}>
                  <Col span={24}>
                    <CustomInput placeholder={"Password"} />
                  </Col>
                </Row>
                <Row style={{ marginBottom: "3vh" }}>
                  <Col span={24}>
                    <CustomInput placeholder={"Phone"} />
                  </Col>
                </Row>
                <Row style={{ marginBottom: "3vh" }}>
                  <Col span={24}>
                    <CustomInput placeholder={"Gender"} />
                  </Col>
                </Row>
                <Row style={{ marginBottom: "5vh" }}>
                  <Col span={24}>
                    <CustomInput placeholder={"fullname"} />
                  </Col>
                </Row>

                <Row style={{ marginBottom: "2vh" }}>
                  <Col span={24}>
                    <CustomButton value={"Submit"} />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <CustomText
                      onClick={redirectToLogin}
                      style={{ textDecoration: "underline", cursor: 'pointer' }}
                    >
                      Already Have an Account ? Sign In Here.
                    </CustomText>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Flex>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
