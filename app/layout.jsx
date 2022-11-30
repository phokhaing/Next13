"user client";
import LoadCSS from "../components/theme/LoadCSS";
import Theme from "../components/theme/Theme";
import LoadScripts from "../components/theme/LoadScripts";
import { Providers } from "./providers";

const RootLayout = ({ children }) => {
  return (
    <Providers>
      <Theme>{children}</Theme>
    </Providers>
  );
};

export default RootLayout;
// export default RootLayout;
