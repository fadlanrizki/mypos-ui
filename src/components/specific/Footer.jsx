import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLOR_PRIMARY, COLOR_WHITE } from "../../constants/propertiesConstant";
import { Col, Row } from "antd";
import CustomText from "../common/text/CustomText";
import moment from "moment";

const FooterContainer = styled.div`
    width: 100%;
    padding: 2vh 5vh;
    background-color: ${COLOR_PRIMARY};
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
  `;

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <FooterContainer>
      <Row justify={"space-between"}>
        <Col>
          <CustomText size={"20px"} weight={"bold"} color={COLOR_WHITE}>
            Kasir 1
          </CustomText>
        </Col>
        <Col>
          <CustomText size={"20px"} weight={"bold"} color={COLOR_WHITE}>
            Budi Agung Putra
          </CustomText>
        </Col>
        <Col>
          <CustomText size={"20px"} weight={"bold"} color={COLOR_WHITE}>
            {currentTime.format("dddd / DD-MM-YYYY")}
          </CustomText>
        </Col>
        <Col>
          <CustomText size={"20px"} weight={"bold"} color={COLOR_WHITE}>
            {currentTime.format("HH:mm")}
          </CustomText>
        </Col>
      </Row>
    </FooterContainer>
  );
};

export default Footer;
