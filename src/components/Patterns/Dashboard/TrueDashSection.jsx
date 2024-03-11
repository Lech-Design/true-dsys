import MudGrid from "@/components/Layout/MudGrid";
import MudItem from "@/components/Layout/MudItem";
import MudTypography from "@/components/MudText/MudTypography";

export default function TrueDashSection(props) {
  let { children, title, description } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudGrid spacing="0" classes="gap-8">
      <MudItem classes="mud-grid-item-xs-12">
        <MudTypography typo="h5" classes="mb-4">
          {title}
        </MudTypography>
        <MudTypography typo="body2" classes="grey-text text-darken-1">
          {description}
        </MudTypography>
      </MudItem>

      <MudGrid spacing="4">{children}</MudGrid>
    </MudGrid>
  );
}
