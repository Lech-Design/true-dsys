import MudGrid from "@/components/Layout/MudGrid";

import MudItem from "@/components/Layout/MudItem";
import MudTypography from "@/components/MudText/MudTypography";

export default function TruePageHeader(props) {
  let { children, title, description } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudItem classes="mud-grid-item-xs-12 pb-12">
      <MudGrid classes="justify-space-between pb-4 gap-3">
        <MudTypography
          typo="h5"
          classes="mud-grid-item-xs-12 mud-grid-item-sm-6"
        >
          {title}
        </MudTypography>
        <MudItem classes="">
          <MudGrid classes="justify-end gap-4">{children}</MudGrid>
        </MudItem>
      </MudGrid>
      <MudTypography typo="body2">{description}</MudTypography>
    </MudItem>
  );
}
