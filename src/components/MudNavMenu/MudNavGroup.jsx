import { useState } from "react";
import MudNavLink from "./MudNavLink";

export default function MudNavGroup(props) {
  let { children, label, Icon } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  let [expand, setExpand] = useState(false);
  let [height, setHeight] = useState("0");

  return (
    <div className="mud-nav-group">
      <button
        onClick={() => {
          setExpand(!expand);
        }}
        className={`mud-nav-link mud-ripple${expand ? " mud-expanded" : ""}`}
      >
        <Icon classes="mud-nav-link-icon mud-nav-link-icon-default" />
        <div className="mud-nav-link-text">{label}</div>
        <svg
          className={`mud-icon-root mud-svg-icon mud-icon-size-medium mud-nav-link-expand-icon${
            expand ? " mud-transform" : ""
          }`}
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </button>
      <div
        className={`mud-collapse-container mud-navgroup-collapse${
          expand
            ? " mud-collapse-entered mud-collapse-entering"
            : " mud-collapse-exiting"
        }`}
        style={{ height: `${expand ? "auto" : "0"}` }}
      >
        <div className="mud-collapse-wrapper">
          <div className="mud-collapse-wrapper-inner">
            <div className="mud-navmenu mud-navmenu-default mud-navmenu-margin-none">
              {children
                ? children.map((child, index) => {
                    return (
                      <div key={index} className="mud-nav-item mud-ripple">
                        <a href="/" rel="" className="mud-nav-link">
                          <div className="mud-nav-link-text">{child}</div>
                        </a>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
