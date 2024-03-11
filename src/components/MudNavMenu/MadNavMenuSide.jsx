import { useState } from "react";
import MudNavLink from "./MudNavLink";
import MudItem from "../Layout/MudItem";
import NetZero from "../Icons/NetZero";
import Dashboard from "../Icons/Dashboard";
import Gasmeter from "../Icons/Gasmeter";
import Finance from "../Icons/Finance";
import Portfolio from "../Icons/Portfolio";
import MudNavGroup from "./MudNavGroup";

export default function MudNavSide(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  let [focus, setFocus] = useState(null);

  function changeFocus(index) {
    setFocus(index);
  }

  return (
    <MudItem classes="px-4 py-4">
      <div className="mud-navmenu mud-navmenu-primary mud-navmenu-margin-normal mud-navmenu-rounded mud-width-full">
        <MudNavLink Icon={Dashboard} label="Town Square" classes="active" />
        <MudNavLink Icon={Gasmeter} label="Energy Procurement" />
        <MudNavGroup label="Sustainability" Icon={NetZero}>
          {"Emissions"}
          {"Targets"}
          {"Projects"}
        </MudNavGroup>
        <MudNavLink Icon={Finance} label="Finance" classes="" />
        <MudNavLink Icon={Portfolio} label="Portfolio Management" classes="" />
      </div>
    </MudItem>
  );
}
