import MudRadioButton from "./MudRadioButon";
import { useState } from "react";

export default function MudRadioGroup(props) {
  let [selected, setSelected] = useState(0);
  let { children, action } = props;
  let classes = props.classes ? ` ${props.classes}` : "";

  function updateRadio(index) {
    setSelected(index);
    action(index);
  }
  return (
    <div
      className={`mud-input-control mud-input-control-boolean-input${classes}`}
    >
      <div className="mud-input-control-input-container">
        <div role="radiogroup" className="mud-radio-group">
          {children
            ? children.map((item, index) => {
                let checked = index === selected ? true : false;
                return (
                  <MudRadioButton
                    key={index}
                    checked={checked}
                    index={index}
                    action={updateRadio}
                  >
                    {item}
                  </MudRadioButton>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
