import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Layout as AntdLayout, Menu } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";

import { Menus } from "../../../utils/constants";

import { Button } from "..";

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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    Boolean(localStorage.getItem("token"))
  );

  const location = useLocation();

  const login = () => {
    localStorage.setItem("token", "token");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

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
          <div className="log-btn">
            {isLoggedIn ? (
              <Button type="primary" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Button type="primary" onClick={login}>
                Login
              </Button>
            )}
          </div>
        </div>
      </Header>
      {isActive && <Alert {...config} />}
      <Content style={{ padding: "0 50px" }}>
        <div id="child-content">{children}</div>
      </Content>
      <Footer
        style={{ textAlign: "center", background: "#001529", color: "white" }}
      >
        Polygon Canvas Created by Huzaifa
      </Footer>
    </AntdLayout>
  );
};

export default Layout;
