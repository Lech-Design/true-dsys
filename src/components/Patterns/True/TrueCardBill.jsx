import MudCard from "@/components/MudCard/MudCard";
import MudTypography from "@/components/MudTypography/MudTypography";
import MudCardContent from "@/components/MudCard/MudCardContent";

export default function TrueCardBill(props) {
  let { children, outlined, color } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudCard outlined={outlined} color={color} classes={classes}>
      <MudCardContent classes="pa-6 pl-10 pr-10">
        <MudTypography typo="body1" classes="mb-4">
          {children[0]}
        </MudTypography>
        <MudTypography typo="h6" classes="mb-2">
          {children[1]}
        </MudTypography>
        <MudTypography typo="h4" classes="">
          <b>{children[2]}</b>
        </MudTypography>
      </MudCardContent>
    </MudCard>
  );
}
