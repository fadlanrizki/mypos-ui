import { Col, Drawer, Flex, Row } from "antd";
import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo/logo.png";
import CustomText from "../common/text/CustomText";
import { COLOR_DANGER } from "../../constants/propertiesConstant";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../routes/routesConstant";
import { IconLogout, IconMasterData, IconMenuTransaction } from "../common/Icon";

const ContentMenu = styled(Flex)`
  height: 100%;
  box-sizing: border-box;
`;

const ContentLogo = styled.img`
  height: 50px;
  width: 150px;
  margin: 5vh 0;
`;

const RowMenuItem = styled(Row)`
  height: 5vh;
  cursor: pointer;
`;

const MenuItem = styled(CustomText)`
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

const Menu = ({ open = false, onClose, ...rest }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(SIGN_IN);
  };

  return (
    <>
      <Drawer
        open={open}
        onClose={onClose}
        destroyOnClose={true}
        placement="left"
        headerStyle={{ display: "none" }}
        {...rest}
      >
        <ContentMenu vertical={true} justify="space-between">
          <div>
            <Row justify={"center"}>
              <Col>
                <ContentLogo src={logo} />
              </Col>
            </Row>
            <RowMenuItem align={"middle"}>
              <Col span={3}>
                <IconMenuTransaction />
              </Col>
              <Col>
                <MenuItem size={"24"} weight={500}>
                  Transaction
                </MenuItem>
              </Col>
            </RowMenuItem>
            <RowMenuItem align={"middle"}>
              <Col span={3}>
                <IconMasterData />
              </Col>
              <Col>
                <MenuItem size={"24"} weight={500}>
                  Master Data
                </MenuItem>
              </Col>
            </RowMenuItem>
          </div>
          <RowMenuItem align={"bottom"} onClick={handleLogout}>
            <Col span={3}>
              <IconLogout />
            </Col>
            <Col>
              <MenuItem
                size={"24"}
                color={COLOR_DANGER}
                weight={500}
              >
                Logout
              </MenuItem>
            </Col>
          </RowMenuItem>
        </ContentMenu>
      </Drawer>
    </>
  );
};

export default Menu;
