import GridItemDrawerHeader from "@/components/Layout/GridPresets/GridItemDrawerHeader";
import MudGrid from "@/components/Layout/MudGrid";
import MudTypography from "@/components/MudTypography/MudTypography";
import MudIconButton from "@/components/Button/MudIconButton";
import IconClose from "@/components/Icons/Close";
import MudItem from "@/components/Layout/MudItem";
import MudDivider from "@/components/Layout/MudDivider";

export default function ActionPanelHeader(props) {
  let { children, action } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <>
      <GridItemDrawerHeader classes="border-l-8 mud-border-primary">
        <MudGrid classes="align-center justify-space-between">
          <MudTypography typo="h6" classes="mud-primary-text">
            {props.title}
          </MudTypography>
          <MudIconButton action={action}>
            <IconClose />
          </MudIconButton>
        </MudGrid>
      </GridItemDrawerHeader>
      <MudItem classes="mud-grid-item-xs-12">
        <MudDivider />
      </MudItem>
    </>
  );
}
