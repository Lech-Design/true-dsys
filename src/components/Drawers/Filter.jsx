import MudGrid from "../Layout/MudGrid";
import MudItem from "../Layout/MudItem";
import TrueItemDrawer from "../decorators/TrueItemDrawer";

import MudDatePicker from "../MudInput/MudDatePicker";
import MudTypography from "../MudText/MudTypography";
import MudDrawRight from "../MudDrawer/MudDrawerRight";
import MudButton from "../Button/MudButton";

import MudDivider from "../Layout/MudDivider";
import MudChipSet from "../MudInput/MudChipset";

import ActionPanelHeader from "../Patterns/True/ActionPanel/ActionPanelHeader";

import { useState } from "react";

export default function FilterDrawer(props) {
  let { children, action, open } = props;
  const results = props.results;
  let [tempresults, setTempresults] = useState(results);

  let [metercount, setMetercount] = useState(0);
  let [statuscount, setStatuscount] = useState(0);
  let classes = props.classes ? ` ${props.classes}` : "";

  function reduceMeters(value) {
    // console.log(value, previous);
    setMetercount(value);
    setTempresults(results - statuscount - value);
  }

  function reduceStatus(value) {
    // console.log(value, previous);
    setStatuscount(value);
    setTempresults(results - metercount - value);
  }

  return (
    <MudDrawRight classes={classes} open={open}>
      <MudGrid>
        {/* Header */}
        <ActionPanelHeader action={action} title="Filter" />

        {/* Date period */}
        <TrueItemDrawer classes="">
          <MudTypography typo="body1" classes="">
            Reporting period
          </MudTypography>
          <MudDatePicker
            variant="text"
            classes="pb-4"
            label=""
            helper="Select a date range"
            // items={["Power", "Gas"]}
          >
            10/08/2023 - 10/01/2024
          </MudDatePicker>
        </TrueItemDrawer>

        <MudItem classes="mud-grid-item-xs-12 pl-6 pr-6">
          <MudDivider />
        </MudItem>

        <TrueItemDrawer classes="">
          <MudTypography typo="body1" classes="pb-4">
            Meter type
          </MudTypography>

          <MudChipSet
            chipList={["All", "HH", "nHH", "Gas"]}
            filterValues={[0, 47, 500, 300]}
            color="dark"
            variant="outlined"
            action={reduceMeters}
          />
        </TrueItemDrawer>
        <MudItem classes="mud-grid-item-xs-12 pl-6 pr-6">
          <MudDivider />
        </MudItem>
        <TrueItemDrawer classes="">
          <MudTypography typo="body1" classes="pb-4">
            Status
          </MudTypography>

          <MudChipSet
            chipList={[
              "Processing",
              "Validated",
              "Resolved",
              "Queried",
              "Other",
            ]}
            filterValues={[10, 8, 124, 62, 12]}
            color="dark"
            variant="text"
            action={reduceStatus}
          />
        </TrueItemDrawer>
        <TrueItemDrawer>
          <MudButton variant="primary">Show {tempresults} results</MudButton>
        </TrueItemDrawer>
      </MudGrid>
    </MudDrawRight>
  );
}
