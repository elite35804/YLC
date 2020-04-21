/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import { connect } from "react-redux";
import HeaderDropdownToggle from "../content/CustomDropdowns/HeaderDropdownToggle";

class UserProfile extends React.Component {
  render() {
    const { user, showHi, showAvatar, showBadge } = this.props;

    return (
      <Dropdown className="kt-header__topbar-item kt-header__topbar-item--user" drop="down" alignRight>
        <Dropdown.Toggle
          as={HeaderDropdownToggle}
          id="dropdown-toggle-user-profile"
        >
          <div className="kt-header__topbar-user">
            {showHi && (
              <span className="kt-header__topbar-username kt-hidden-mobile">
                {user.fullname}
              </span>
            )}

            {showAvatar && <img alt="Pic" src={user.pic} />}

            {showBadge && (
              <span className="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold">
                {/* TODO: Should get from currentUser */}
                John Doe
              </span>
            )}
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
          {/** ClassName should be 'dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl' */}
          <div className="kt-notification">
            <div className="kt-notification__custom">
              <Link
                to="/logout"
                className="btn btn-label-brand btn-sm btn-bold"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

const mapStateToProps = ({ auth: { user } }) => ({
  user
});

export default connect(mapStateToProps)(UserProfile);
