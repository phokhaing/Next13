import LoadCSS from "./theme/LoadCSS";
import Theme from "./theme/Theme";
import { wrapper } from "../redux/store";

'use client';
const RootLayout = ({ children }) => {
  return (
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
        <Theme>{children}</Theme>

        <script src="/static/assets/js/vendor.min.js"></script>
        <script src="/static/assets/js/app.min.js"></script>
      </body>
    </html>
  );
};

export default wrapper.withRedux(RootLayout);
// export default RootLayout;
