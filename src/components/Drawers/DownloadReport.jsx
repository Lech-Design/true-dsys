import MudGrid from "../Layout/MudGrid";
import MudItem from "../Layout/MudItem";
import GridItemDrawerHeader from "../Layout/GridPresets/GridItemDrawerHeader";
import GridItemDrawer from "../Layout/GridPresets/GridItemDrawer";
import MudSelect from "../MudInput/MudSelect";
import MudTypography from "../MudTypography/MudTypography";
import MudDrawRight from "../MudDrawer/MudDrawerRight";
import MudButton from "../Button/MudButton";
import MudDivider from "../Layout/MudDivider";
import MudIconButton from "../Button/MudIconButton";
import IconClose from "../Icons/Close";

export default function DownloadReport(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudDrawRight classes={classes}>
      <MudGrid>
        <GridItemDrawerHeader classes="border-left-thick">
          <MudGrid classes="align-center justify-space-between">
            <MudTypography typo="h6" classes="mud-primary-text">
              Download report
            </MudTypography>
            <MudIconButton>
              <IconClose />
            </MudIconButton>
          </MudGrid>
        </GridItemDrawerHeader>
        <MudItem classes="mud-grid-item-xs-12">
          <MudDivider />
        </MudItem>

        <GridItemDrawer>
          <MudSelect
            classes="pb-4"
            label="Meter type"
            helper="Please select an item"
            items={["Power", "Gas"]}
            variant="text" // "text", "outlined" , "filled"
          >
            Power
          </MudSelect>
          <MudButton variant="primary">Download</MudButton>
        </GridItemDrawer>
      </MudGrid>
    </MudDrawRight>
  );
}
