import { Col, Flex, Row, Table } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import {
  IconMember,
  IconMenuHamburger,
  IconQrCode,
} from "../../components/common/Icon";
import CustomButton from "../../components/common/button/CustomButton";
import CustomInput from "../../components/common/input/CustomInput";
import CustomText from "../../components/common/text/CustomText";
import Footer from "../../components/specific/Footer";
import { COLOR_PRIMARY, COLOR_WHITE } from "../../constants/propertiesConstant";
import Menu from "../../components/specific/Menu";

const PageContainer = styled(Flex)`
  height: 100vh;
  width: 100%;
  padding: 5vh 0 0 0;
  box-sizing: border-box;
`;

const Content = styled(Flex)`
  padding: 0 3vh;
  boxsizing: border-box;
`;

const ContentTotal = styled(Col)`
  background: ${COLOR_PRIMARY};
  padding: 3vh 10vh;
  border-radius: 15px;
`;

const RowContent = styled(Row)`
  margin-bottom: 22px;
`;

const ContentToolbar = styled(Row)`
  height: 75vh;
  width: 100%;
  border: 1px solid ${COLOR_PRIMARY};
  border-radius: 15px;
  padding: 3vh 2vh;
`;

const ButtonToolbar = styled(CustomButton)`
  width: 100%;
  height: 10vh;
  font-weight: bold;
  font-size: 1.1vmax;
`;

const RowToolbar = styled(Row)`
  width: 100%;
`;

const columns = [
  {
    title: "",
    dataIndex: "action",
    key: "action",
    width: "60px",
  },
  {
    title: "Product",
    dataIndex: "Product",
    key: "Product",
  },
  {
    title: "Qty",
    dataIndex: "qty",
    key: "qty",
  },
  {
    title: "Price",
    dataIndex: "Price",
    key: "Price",
  },
  {
    title: "Total",
    dataIndex: "Total",
    key: "Total",
  },
];

const dataSource = [
  {
    Product: "Bear brand 500m",
  },
  {
    Product: "Bear brand 500m",
  },
  {
    Product: "Bear brand 500m",
  },
  {
    Product: "Bear brand 500m",
  },
  {
    Product: "Bear brand 500m",
  },
  {
    Product: "Bear brand 500m",
  },
  {
    Product: "Bear brand 500m",
  },
];

const HomeTransaction = () => {
  const [drawerMenu, setDrawerMenu] = useState(false);
  return (
    <PageContainer vertical justify="space-between">
      <Content vertical justify="start">
        <RowContent gutter={12}>
          <Col span={1}>
            <CustomButton
              icon={<IconMenuHamburger />}
              onClick={() => setDrawerMenu(true)}
            />
          </Col>
          <Col span={17}>
            <CustomInput
              size={"large"}
              placeholder={"Scan Barcode"}
              suffix={<IconQrCode />}
            />
          </Col>
          <Col span={6}>
            <CustomInput
              size={"large"}
              placeholder={"Member"}
              suffix={<IconMember />}
            />
          </Col>
        </RowContent>

        <RowContent gutter={18}>
          <Col span={18}>
            <RowContent>
              <ContentTotal span={24}>
                <Flex vertical={true} justify="start">
                  <Row justify={"space-between"}>
                    <Col span={12}>
                      <Flex vertical={true}>
                        <CustomText color={COLOR_WHITE} size={32} weight={500}>
                          Items
                        </CustomText>
                        <CustomText color={COLOR_WHITE} size={32} weight={600}>
                          0
                        </CustomText>
                      </Flex>
                    </Col>
                    <Col span={12}>
                      <Flex vertical={true}>
                        <CustomText color={COLOR_WHITE} size={32} weight={500}>
                          Total
                        </CustomText>
                        <CustomText color={COLOR_WHITE} size={32} weight={600}>
                          Rp. 15.000,00
                        </CustomText>
                      </Flex>
                    </Col>
                  </Row>
                </Flex>
              </ContentTotal>
            </RowContent>
            <Row>
              <Col span={24}>
                <Table
                  dataSource={[]}
                  columns={columns}
                  scroll={{ y: 400 }}
                  pagination={{
                    position: ["none"],
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <ContentToolbar vertical={true} justify={"space-between"}>
              <RowToolbar>
                <Col span={24}>
                  <ButtonToolbar size={"large"} value={"Search Product"} />
                </Col>
              </RowToolbar>
              <RowToolbar>
                <Col span={24}>
                  <ButtonToolbar size={"large"} value={"Member"} />
                </Col>
              </RowToolbar>
              <RowToolbar>
                <Col span={24}>
                  <ButtonToolbar
                    size={"large"}
                    value={"Discount Transaction"}
                  />
                </Col>
              </RowToolbar>
              <RowToolbar gutter={8}>
                <Col span={12}>
                  <ButtonToolbar size={"large"} value={"Pending"} />
                </Col>
                <Col span={12}>
                  <ButtonToolbar
                    size={"large"}
                    value={"Continue"}
                    disabled={true}
                  />
                </Col>
              </RowToolbar>
              <RowToolbar>
                <Col span={24}>
                  <ButtonToolbar
                    style={{ background: "#D92121" }}
                    size={"large"}
                    danger={true}
                    value={"Reset Transaction"}
                  />
                </Col>
              </RowToolbar>
              <RowToolbar>
                <Col span={24}>
                  <ButtonToolbar
                    style={{ background: "#27AE60" }}
                    size={"large"}
                    value={"Pay"}
                  />
                </Col>
              </RowToolbar>
            </ContentToolbar>
          </Col>
        </RowContent>
      </Content>

      <Footer />
      <Menu open={drawerMenu} onClose={() => setDrawerMenu(false)} />
    </PageContainer>
  );
};

export default HomeTransaction;
