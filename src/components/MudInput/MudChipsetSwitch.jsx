import MudChip from "./MudChip";
import { useState } from "react";

export default function MudChipSetSwitch(props) {
  let { variant, color, chipList } = props;

  let [selected, setSelected] = useState(0);

  function onClick(key) {
    setSelected(key);
  }

  return (
    <div className="mud-chipset pb-6 d-flex flex-wrap gap-3">
      {chipList.map((chip, index) => {
        return (
          <MudChip
            key={index}
            chipId={index}
            filterValue={props.filterValues ? props.filterValues[index] : 0}
            color={color}
            variant={selected === index ? "filled" : variant}
            selected={selected === index ? "mud-chip-selected" : ""}
            action={onClick}
            classes={"ma-0"}
          >
            {chip}
          </MudChip>
        );
      })}
    </div>
  );
}
