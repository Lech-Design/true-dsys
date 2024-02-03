import { useState } from "react";

export default function DropDownList(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";

  return (
    <div
      className={
        "mud-popover mud-popover-open mud-popover-top-center mud-popover-anchor-top-center mud-popover-overflow-flip-onopen mud-popover-relative-width mud-paper mud-elevation-8 overflow-y-auto"
      }
      style={{
        transitionDuration: "251ms",
        transitionDelay: "0ms",
        maxHeight: "300px",
        zIndex: "calc(var(--mud-zindex-popover) + 3)",
        maxWidth: "1198px",
        left: "0",
        top: "0",
      }}
    >
      <div className="mud-list mud-list-padding">
        {props.items.map((item, index) => {
          return (
            <div
              key={index}
              className={
                "mud-list-item mud-list-item-gutters mud-list-item-clickable mud-ripple" +
                (props.selectedItem === index
                  ? " mud-selected-item mud-primary-text mud-primary-hover"
                  : "")
              }
              onClick={() => {
                props.toggleAction(index);
              }}
            >
              <div className="mud-list-item-text ">
                <p className="mud-typography mud-typography-body1">{item}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
