"use client";

import Topbar from "./Topbar";
import Leftbar from "./Leftbar";
import PageTitle from "./pageTitle";
import Footer from "./Footer";
import Rightbar from "./Rightbar";
import LoadCSS from "./LoadCSS";
import LoadScripts from "./LoadScripts";
import { useSelector } from "react-redux";
import { themeSetting } from "../../service/theme/themeService";

const Theme = ({ children }) => {
  const { topBar, leftBar } = useSelector(themeSetting);
  
  return (
    <>
      <html>
        <head>
          <LoadCSS />
        </head>
        <body
          data-layout-mode="detached"
          data-theme="light"
          data-topbar-color="dark"
          data-menu-position="fixed"
          data-leftbar-color="light"
          data-leftbar-size="default"
          data-sidebar-user="true"
        >
          <div id="wrapper">
            <Topbar topBar={topBar} />
            <Leftbar leftBar={leftBar} />
            <div className="content-page">
              <div className="content">
                <div className="container-fluid">
                  <PageTitle />
                  {/* <Dashboard /> */}
                  {children}
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <Rightbar />
          <LoadScripts />
        </body>
      </html>
    </>
  );
};

export default Theme;
