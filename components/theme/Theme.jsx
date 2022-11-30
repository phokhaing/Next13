"use client";

import Topbar from "./Topbar";
import Leftbar from "./Leftbar";
import PageTitle from "./pageTitle";
import Footer from "./Footer";
import Rightbar from "./Rightbar";

const Theme = ({ children }) => {
  return (
    <>
      <div id="wrapper">
        <Topbar />
        <Leftbar />
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
    </>
  );
};

export default Theme;
