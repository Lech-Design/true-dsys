import DropDownList from "./DropdownList";
import { useState } from "react";
import IconDate from "../Icons/Date";
import MudIconButton from "../Button/MudIconButton";
import PickerPopupDate from "./PickerPopUpDate";

export default function MudDatePicker(props) {
  let [dropdown, setDropdown] = useState(false);
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  let typeClass = props.variant;
  function showHide() {
    setDropdown(!dropdown);
  }
  return (
    <div className={"mud-select" + classes}>
      <div className="mud-input-control mud-select">
        <div className="mud-input-control-input-container">
          <div
            className={`mud-input mud-input-${typeClass} mud-input-adorned-end mud-shrink mud-select-input ${
              typeClass === "text" ? "mud-input-underline" : ""
            }`}
            onClick={showHide}
          >
            <input
              className={`mud-input-slot mud-input-root mud-input-root-${typeClass} mud-input-root-adorned-end mud-select-input`}
              type={"hidden"}
              // readonly=""
              // inputmode="text"
              // maxlength="524288"
              // aria-invalid="false"
              // _bl_352=""
              // value="5"
            />
            <div
              className={`mud-input-slot mud-input-root mud-input-root-${typeClass} mud-input-root-adorned-end mud-select-input`}
              style={{ display: "inline" }}
            >
              {children}
            </div>
            <div className="mud-input-adornment mud-input-adornment-end mud-select-input">
              <MudIconButton>
                <IconDate />
              </MudIconButton>
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
      {dropdown ? <PickerPopupDate toggleAction={showHide} /> : ""}
    </div>
  );
}
