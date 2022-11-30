"user client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeSetting, setTopbar } from "../../service/theme/themeService";

const Menu = ({ leftBar }) => {
  const router = useRouter();
  // useEffect(() => {
  //   dispatch(
  //     setTopbar({
  //       loading: false,
  //       pageTitle: "Dashboard",
  //       topbar: "#0F4FA1",
  //     })
  //   );
  // }, [dispatch]);

  return (
    <div id="sidebar-menu">
      <ul id="side-menu">
        {/* <li className="menu-title">Navigation</li> */}
        <li
          style={{
            backgroundColor: `${leftBar?.backgroundColor}`,
            borderRadius: "0 15px",
          }}
        >
          <Link href="/" legacyBehavior>
            <a
              className="active"
              style={{
                color: `${leftBar?.textColor}`,
              }}
            >
              <i className="fas fa-home menu-icons" aria-hidden="true"></i>
              <span> Home </span>
            </a>
          </Link>
        </li>
        <li
          style={
            router?.pathname == "/user"
              ? { backgroundColor: "#c4a006", borderRadius: "0 10px" }
              : {}
          }
        >
          <Link href="/user" legacyBehavior>
            <a>
              <i className="fas fa-user-alt" aria-hidden="true"></i>
              <span> User </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" legacyBehavior>
            <a>
              <i className="fas fa-shield-alt" aria-hidden="true"></i>
              <span> Role & Permission </span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
