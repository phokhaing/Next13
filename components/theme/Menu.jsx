import Link from "next/link";

const Menu = () => {
  return (
    <div id="sidebar-menu">
      <ul id="side-menu">
        {/* <li className="menu-title">Navigation</li> */}
        <li style={{backgroundColor: #c4a006,
    borderRadius: 0 10px}}>
          <Link href="/" legacyBehavior>
            <a>
              <i className="fas fa-home menu-icons" aria-hidden="true"></i>
              <span> Home </span>
            </a>
          </Link>
        </li>
        <li>
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
