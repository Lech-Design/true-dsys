import MudCardHeaderContent from "@/components/MudCard/MudCardHeaderContent";
import MudTypography from "@/components/MudText/MudTypography";
import MudRadioGroup from "@/components/MudInput/MudRadio";
import MudButton from "@/components/Button/MudButton";
import TrueCard from "../True/TrueCard/TrueCard";
import TrueCardHeader from "../True/TrueCard/TrueCardHeader";
import TrueCardHeaderActions from "../True/TrueCard/TrueCardHeaderActions";
import TrueCardContent from "../True/TrueCard/TrueCardContent";
import TrueCardActions from "../True/TrueCard/TrueCardActions";
import ChartjsBar from "@/components/_data/ChartjsBar";

export default function TrueWidget(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <TrueCard>
      <TrueCardHeader>
        <MudCardHeaderContent>
          <MudTypography typo="h5" classes="grey-text text-darken-1">
            Consumption
          </MudTypography>
        </MudCardHeaderContent>
        <TrueCardHeaderActions>
          <MudRadioGroup>
            {"Power"}
            {"Gas"}
          </MudRadioGroup>
        </TrueCardHeaderActions>
      </TrueCardHeader>
      <TrueCardContent>
        <ChartjsBar />
      </TrueCardContent>
      <TrueCardActions>
        <MudButton color="primary">See more</MudButton>
      </TrueCardActions>
    </TrueCard>
  );
}
