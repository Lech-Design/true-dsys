import MudContainer from "@/components/Layout/MudContainer";
import MudGrid from "@/components/Layout/MudGrid";
import MudItem from "@/components/Layout/MudItem";
import MudTypography from "@/components/MudText/MudTypography";
import MudButton from "@/components/Button/MudButton";
import MudTable from "@/components/MudTable/MudTable";
import MudTableEmissions from "@/components/MudTable/MudTableEmissions";
import TrueHeaderButton from "@/components/Button/True/TrueHeaderButton";
import TruePageHeader from "../True/TruePageHeader";

export default function EmissionsPage(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudContainer classes="mud-container-maxwidth-lg">
      <MudGrid>
        <TruePageHeader
          title="Emissions"
          description="Enter and track your Scope 1, 2, and 3 emissions annually. Set your
            baseline year and monitor your progress over time."
        >
          <TrueHeaderButton>+ Add Emissions</TrueHeaderButton>
          <MudButton variant="primary" size="small">
            Set goals
          </MudButton>
        </TruePageHeader>

        <MudItem classes="mud-grid-item-xs-12 pb-12">
          <MudTypography typo="h6" classes="pb-4">
            Baseline Year
          </MudTypography>
          <MudTable outlined={true} cols={[25, 35, 20, 15, 5]} />
        </MudItem>

        <MudItem classes="mud-grid-item-xs-12 pb-12">
          <MudTypography typo="h6" classes="pb-4">
            Reporting Periods
          </MudTypography>
          <MudTableEmissions outlined={true} cols={[25, 35, 20, 15, 5]} />
        </MudItem>
      </MudGrid>
    </MudContainer>
  );
}
