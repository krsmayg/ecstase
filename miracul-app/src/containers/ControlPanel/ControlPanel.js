import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import RightNavigation from "../../components/ControlPanelHeader/RightNavigation";
import color from "../../styles/colors";
import { connect } from "react-redux";
import { getMe, logout } from "../../actions/auth";
import {
  FileImageOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  TableOutlined
} from "@ant-design/icons";
import { Route, Switch, withRouter, Router, Link } from "react-router-dom";
import Statistic from "./Statistic";
import AddPosterPage from "./AddPosterPage";
import PosterTablePage from "./PosterTablePage";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const ControlPanel = React.memo((props) => {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    props.getMe();
  }, []);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  const logoutHandler = () => {
    props.logout().then(() => {
      props.history.push("/login");
    });
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{ backgroundColor: color.primaryColor }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ backgroundColor: color.primaryColor, marginTop: "30%" }}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/dashboard/statistic">Statistic</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileImageOutlined />}>
            <Link to="/dashboard/add-posters">Add posters</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<TableOutlined />}>
            <Link to="/dashboard/posters-table">Posters List</Link>
          </Menu.Item>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{ backgroundColor: color.primaryColor, padding: 0 }}
          className="controlPanel-header"
        >
          <div>Logo</div>
          <RightNavigation user={props.user} logout={logoutHandler} />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Switch>
            <Route path="/dashboard/statistic" component={Statistic}></Route>
            <Route path="/dashboard/posters-table" component={PosterTablePage}></Route>
            <Route
              path="/dashboard/add-posters/"
              component={AddPosterPage}
            ></Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
});
const mapStateToProps = (state) => {
  return {
    user: state.authState.userData,
  };
};
export default connect(mapStateToProps, { getMe, logout })(
  withRouter(ControlPanel)
);
