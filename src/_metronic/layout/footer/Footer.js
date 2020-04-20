import React from "react";
import { connect } from "react-redux";
import objectPath from "object-path";
import * as builder from "../../ducks/builder";

class Footer extends React.Component {
  render() {
    return (
      <div
        className={`kt-footer ${this.props.footerClasses} kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop`}
        id="kt_footer"
      >
        <div className={`kt-container ${this.props.footerContainerClasses}`}>
          <div className="kt-footer__copyright">
            Copyright @ 2020 Your Local Call. All rights Reserved.
          </div>
          <div className="kt-footer__menu">
            Powered by Digital IPVoice
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  fluid:
    objectPath.get(store.builder.layoutConfig, "footer.self.width") === "fluid",
  footerClasses: builder.selectors.getClasses(store, {
    path: "footer",
    toString: true
  }),
  footerContainerClasses: builder.selectors.getClasses(store, {
    path: "footer_container",
    toString: true
  })
});

export default connect(mapStateToProps)(Footer);
