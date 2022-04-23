import React from "react";
import { Link, useLocation } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Layout as AntdLayout, Menu } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";

import { Menus } from "../../../utils/constants";

import "./styles/Layout.scss";
import { Alert } from "..";

const Layout = function ({ children }: { children: JSX.Element }) {
  const {
    alert: { config, isActive },
  } = useSelector(
    (state: any) => ({
      alert: state.alert,
    }),
    shallowEqual
  );

  const location = useLocation();

  return (
    <AntdLayout className="layout">
      <Header>
        <div className="logo" />
        <div className="header-menu">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[location.pathname]}
            className="links"
          >
            {Menus.map((menu) => (
              <Menu.Item key={menu.path}>
                <Link to={menu.path}>{menu.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Header>
      {isActive && <Alert {...config} />}
      <Content style={{ padding: "0 50px" }}>
        <div id="child-content">{children}</div>
      </Content>
      <Footer
        style={{ textAlign: "center", background: "#001529", color: "white" }}
      >
        Rock Paper and Scissors Created by Huzaifa
      </Footer>
    </AntdLayout>
  );
};

export default Layout;
