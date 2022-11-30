"user client";
import LoadCSS from "../components/theme/LoadCSS";
import Theme from "../components/theme/Theme";
import LoadScripts from "../components/theme/LoadScripts";

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
        <LoadScripts />
      </body>
    </html>
  );
};

export default RootLayout;
// export default RootLayout;
