import { useState } from "react";

export default function MudTabs(props) {
  let { children } = props;
  let elevation = props.elevation ? props.elevation : "0";
  let rounded = props.rounded ? "mud-tabs-rounded " : "";
  let vertical = props.vertical ? " mud-tabs-vertical" : "";
  let [tabindex, setTabindex] = useState(0);
  let sliderwidth = 160;
  let { items } = props;

  function moveSlider(itemPos) {
    setTabindex(itemPos);
  }

  return (
    <div className={`mud-tabs ${rounded}mud-elevation-${elevation}${vertical}`}>
      <div className={`mud-tabs-toolbar${vertical}`}>
        <div className="mud-tabs-toolbar-inner">
          <div className="mud-tabs-toolbar-content">
            <div className={`mud-tabs-toolbar-wrapper${vertical}`}>
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mud-tooltip-root mud-tooltip-inline"
                    onClick={() => {
                      moveSlider(index);
                    }}
                  >
                    <div className="mud-tab mud-ripple">{item}</div>
                  </div>
                );
              })}

              <div
                className="mud-tab-slider mud-tab-slider-horizontal"
                style={{
                  width: sliderwidth + "px",
                  left: sliderwidth * tabindex,
                  transition: "left .3s cubic-bezier(.64,.09,.08,1)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mud-tabs-panels pa-6">{children[tabindex]}</div>
    </div>
  );
}
