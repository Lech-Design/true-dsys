// variant = "outlined, filled, text"
// color = "success, info, normal, warning, error
// dense = true : false
// square = true : false

import IconClose from "../Icons/Close";
import { useState } from "react";

export default function MudAlert(props) {
  let [showalert, setShowalert] = useState(true);

  let { children, color, elevation, variant, close } = props;
  let dense = props.dense ? " mud-dense" : "";
  let square = props.square ? " mud-square" : "";
  //   let close = props.close ? "" :
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <>
      {showalert ? (
        <div
          role="alert"
          className={`mud-alert mud-alert-${variant}-${color}${dense}${square} mud-elevation-${elevation}${classes}`}
        >
          <div className="mud-alert-position justify-sm-start">
            {children ? (
              <div className="mud-alert-icon mud-alert-icon-left">
                {children}
              </div>
            ) : (
              ""
            )}
            <div className="mud-alert-message">{props.label}</div>
          </div>
          {close ? (
            <div className="mud-alert-close">
              <button
                aria-pressed="false"
                type="button"
                className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-icon-button-size-small"
                onClick={() => {
                  setShowalert(false);
                }}
              >
                <span className="mud-icon-button-label">
                  <IconClose />
                </span>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
