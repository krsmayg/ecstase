import React, { Component } from "react";
import "antd/dist/antd.css";
import { Avatar, Menu, Dropdown } from "antd";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";

const RightNavigation = (props) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <span onClick={props.logout}>
          Log out <LoginOutlined />
        </span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div
      className="controlPanel-header__right-nav"
      style={{ marginRight: "20px" }}
    >
      <Dropdown overlay={menu}>
        <div style={{ color: "white" }}>
          <Avatar
            size="small"
            icon={<UserOutlined />}
            style={{ marginRight: "20px" }}
          />
          {props.user ? props.user.name : 'loading...' }
        </div>
      </Dropdown>
    </div>
  );
};

export default RightNavigation;
