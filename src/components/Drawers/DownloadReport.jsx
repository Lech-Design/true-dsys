import MudGrid from "../Layout/MudGrid";
import MudItem from "../Layout/MudItem";
import GridItemDrawer from "../Layout/GridPresets/GridItemDrawer";
import MudSelect from "../MudInput/MudSelect";
import MudTypography from "../MudTypography/MudTypography";
import MudDrawRight from "../MudDrawer/MudDrawerRight";
import MudButton from "../Button/MudButton";
import MudDivider from "../Layout/MudDivider";
import MudChipSetSwitch from "../MudInput/MudChipsetSwitch";
import ActionPanelHeader from "../Patterns/True/ActionPanel/ActionPanelHeader";

export default function DownloadReport(props) {
  let { children, open, action } = props;
  let classes = props.classes ? ` ${props.classes}` : "";

  return (
    <MudDrawRight classes={classes} open={open} action={action}>
      <MudGrid>
        <ActionPanelHeader action={action} title="Download report" />

        <GridItemDrawer classes="">
          <MudTypography typo="body1" classes="pb-4">
            Select a Meter type:
          </MudTypography>

          <MudChipSetSwitch
            chipList={["Gas", "Power"]}
            filterValues={[0, 47, 500, 300]}
            color="dark"
            variant="text"
          />
        </GridItemDrawer>
        <MudItem classes="mud-grid-item-xs-12 pl-6 pr-6">
          <MudDivider />
        </MudItem>
        <GridItemDrawer>
          <MudTypography typo="body1" classes="pb-3">
            Choose a report:
          </MudTypography>
          <MudSelect
            classes="pb-4"
            label=""
            helper=""
            items={["Exceptions", "Pre-validation", "Post-validation"]}
            dense={false}
            variant="outlined" // "text", "outlined" , "filled"
          >
            Power
          </MudSelect>
        </GridItemDrawer>
        <GridItemDrawer>
          <MudButton variant="primary">Download</MudButton>
        </GridItemDrawer>
      </MudGrid>
    </MudDrawRight>
  );
}
