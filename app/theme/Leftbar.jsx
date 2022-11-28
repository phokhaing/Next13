import Link from "next/link";
'use client';
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
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="fe-user me-1" />
                <span>My Account</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="fe-settings me-1" />
                <span>Settings</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="fe-lock me-1" />
                <span>Lock Screen</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="fe-log-out me-1" />
                <span>Logout</span>
              </a>
            </div>
          </div>
          <p className="text-muted">Sofware Develper</p>
        </div>
        {/* end user profile */}

        {/*- start menu */}
        <div id="sidebar-menu">
          <ul id="side-menu">
            <li className="menu-title">Navigation</li>
            <li>
              <Link href="#sidebarDashboards" legacyBehavior>
                <a>
                  <i data-feather="airplay" />
                  <span> Dashboards </span>
                </a>
              </Link>
            </li>

            <li className="menu-title mt-2">Apps</li>
            <li>
              <a href="#sidebarContacts" data-bs-toggle="collapse">
                <i data-feather="book" />
                <span> Contacts </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarContacts">
                <ul className="nav-second-level">
                  <li>
                    <a href="contacts-list.html">Members List</a>
                  </li>
                  <li>
                    <a href="contacts-profile.html">Profile</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-title mt-2">Authentication</li>

            <li>
              <a href="#sidebarBaseui" data-bs-toggle="collapse">
                <i data-feather="pocket" />
                <span> Base UI </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarBaseui">
                <ul className="nav-second-level">
                  <li>
                    <a href="ui-buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="ui-cards.html">Cards</a>
                  </li>
                  <li>
                    <a href="ui-avatars.html">Avatars</a>
                  </li>
                  <li>
                    <a href="ui-portlets.html">Portlets</a>
                  </li>
                  <li>
                    <a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a>
                  </li>
                  <li>
                    <a href="ui-modals.html">Modals</a>
                  </li>
                  <li>
                    <a href="ui-progress.html">Progress</a>
                  </li>
                  <li>
                    <a href="ui-notifications.html">Notifications</a>
                  </li>
                  <li>
                    <a href="ui-offcanvas.html">Offcanvas</a>
                  </li>
                  <li>
                    <a href="ui-placeholders.html">Placeholders</a>
                  </li>
                  <li>
                    <a href="ui-spinners.html">Spinners</a>
                  </li>
                  <li>
                    <a href="ui-images.html">Images</a>
                  </li>
                  <li>
                    <a href="ui-carousel.html">Carousel</a>
                  </li>
                  <li>
                    <a href="ui-list-group.html">List Group</a>
                  </li>
                  <li>
                    <a href="ui-video.html">Embed Video</a>
                  </li>
                  <li>
                    <a href="ui-dropdowns.html">Dropdowns</a>
                  </li>
                  <li>
                    <a href="ui-ribbons.html">Ribbons</a>
                  </li>
                  <li>
                    <a href="ui-tooltips-popovers.html">
                      Tooltips &amp; Popovers
                    </a>
                  </li>
                  <li>
                    <a href="ui-general.html">General UI</a>
                  </li>
                  <li>
                    <a href="ui-typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="ui-grid.html">Grid</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#sidebarMultilevel" data-bs-toggle="collapse">
                <i data-feather="share-2" />
                <span> Multi Level </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarMultilevel">
                <ul className="nav-second-level">
                  <li>
                    <a href="#sidebarMultilevel2" data-bs-toggle="collapse">
                      Second Level <span className="menu-arrow" />
                    </a>
                    <div className="collapse" id="sidebarMultilevel2">
                      <ul className="nav-second-level">
                        <li>
                          <a href="javascript: void(0);">Item 1</a>
                        </li>
                        <li>
                          <a href="javascript: void(0);">Item 2</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#sidebarMultilevel3" data-bs-toggle="collapse">
                      Third Level <span className="menu-arrow" />
                    </a>
                    <div className="collapse" id="sidebarMultilevel3">
                      <ul className="nav-second-level">
                        <li>
                          <a href="javascript: void(0);">Item 1</a>
                        </li>
                        <li>
                          <a
                            href="#sidebarMultilevel4"
                            data-bs-toggle="collapse"
                          >
                            Item 2 <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarMultilevel4">
                            <ul className="nav-second-level">
                              <li>
                                <a href="javascript: void(0);">Item 1</a>
                              </li>
                              <li>
                                <a href="javascript: void(0);">Item 2</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
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
