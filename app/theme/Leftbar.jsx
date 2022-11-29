import Link from "next/link";
("use client");
const Leftbar = () => {
  return (
    <div className="left-side-menu">
      <div className="h-100" data-simplebar>
        {/* user profile */}
        <div className="user-box text-center">
          <img
            src="/static/assets/images/users/phokhaing.jpg"
            alt="user-img"
            title="Mat Helme"
            className="rounded-circle avatar-lg"
          />
          <div className="dropdown">
            <Link href="/" legacyBehavior>
              <a
                className="text-black dropdown-toggle h5 mt-2 mb-1 d-block"
                data-bs-toggle="dropdown"
              >
                Pho Khaing
              </a>
            </Link>
            <div className="dropdown-menu user-pro-dropdown">
              {/* item*/}

              <Link href="/" legacyBehavior>
                <a className="dropdown-item notify-item">
                  <i className="fe-user me-1" />
                  <span>My Account</span>
                </a>
              </Link>
              <Link href="/" legacyBehavior>
                {/* item*/}
                <a className="dropdown-item notify-item">
                  <i className="fe-settings me-1" />
                  <span>Settings</span>
                </a>
              </Link>
              {/* item*/}

              <Link href="/" legacyBehavior>
                <a className="dropdown-item notify-item">
                  <i className="fe-lock me-1" />
                  <span>Lock Screen</span>
                </a>
              </Link>
              {/* item*/}

              <Link href="/" legacyBehavior>
                <a className="dropdown-item notify-item">
                  <i className="fe-log-out me-1" />
                  <span>Logout</span>
                </a>
              </Link>
            </div>
          </div>
          <p className="text-muted">Sofware Develper</p>
        </div>
        {/* end user profile */}

        {/*- start menu */}
        <div id="sidebar-menu">
          <ul id="side-menu">
            {/* <li className="menu-title">Navigation</li> */}
            <li>
              <Link href="/" legacyBehavior>
                <a>
                  <i className="fas fa-home" aria-hidden="true"></i>
                  <span> Home </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
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
        {/* End Sidebar */}
        <div className="clearfix" />
      </div>
      {/* Sidebar -left */}
    </div>
  );
};

export default Leftbar;
