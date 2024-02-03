import DropDownList from "./DropdownList";
import { useState } from "react";
import IconDownload from "../Icons/Download";
import IconChevronDown from "../Icons/ChevronDown";

export default function MudSelect(props) {
  let [dropdown, setDropdown] = useState(false);
  let [index, setIndex] = useState(0);
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  let typeClass = props.variant;
  let items = props.items;

  function showDropdown() {
    setDropdown(true);
  }

  function hideDropdown(index) {
    setIndex(index);
    setDropdown(false);
  }
  return (
    <div className={"mud-select" + classes}>
      <div className="mud-input-control mud-select">
        <div className="mud-input-control-input-container">
          <div
            className={`mud-input mud-input-${typeClass} mud-input-adorned-end mud-shrink mud-select-input ${
              typeClass === "text" ? "mud-input-underline" : ""
            }`}
            onClick={showDropdown}
          >
            <input
              className={`mud-input-slot mud-input-root mud-input-root-${typeClass} mud-input-root-adorned-end mud-select-input`}
              type={"hidden"}
            />
            <div
              className={`mud-input-slot mud-input-root mud-input-root-${typeClass} mud-input-root-adorned-end mud-select-input`}
              style={{ display: "inline" }}
            >
              {props.items[index]}
            </div>
            <div className="mud-input-adornment mud-input-adornment-end mud-select-input">
              <IconChevronDown />
            </div>
            <div className={`mud-input-${typeClass}-border`}></div>
          </div>
          <div className="mud-popover-cascading-value"></div>
          {props.label ? (
            <label
              className={`mud-input-label mud-input-label-animated mud-input-label-${typeClass} mud-input-label-inputcontrol`}
            >
              {props.label}
            </label>
          ) : (
            ""
          )}
        </div>
        {props.helper ? (
          <div className="mud-input-control-helper-container">
            <div className="d-flex">
              <div className="me-auto">
                <p className="mud-input-helper-text">{props.helper}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {dropdown ? (
        <DropDownList
          toggleAction={hideDropdown}
          items={props.items}
          selectedItem={index}
        />
      ) : (
        ""
      )}
    </div>
  );
}
