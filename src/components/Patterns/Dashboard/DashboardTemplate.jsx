import MudCardHeaderContent from "@/components/MudCard/MudCardHeaderContent";
import MudTypography from "@/components/MudText/MudTypography";
import MudContainer from "@/components/Layout/MudContainer";
import BarChart from "@/components/_templates/BarChart";
import MudRadioGroup from "@/components/MudInput/MudRadio";
import MudGrid from "@/components/Layout/MudGrid";
import MudItem from "@/components/Layout/MudItem";
import MudButton from "@/components/Button/MudButton";

import TrueCard from "../True/TrueCard/TrueCard";
import TrueCardHeader from "../True/TrueCard/TrueCardHeader";
import TrueCardHeaderActions from "../True/TrueCard/TrueCardHeaderActions";
import TrueCardContent from "../True/TrueCard/TrueCardContent";
import TrueCardActions from "../True/TrueCard/TrueCardActions";

import ChartjsBar from "@/components/_data/ChartjsBar";

import TrueDashSection from "./TrueDashSection";

import { useState } from "react";

export default function DashboardTemplate(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";

  let [energy, setEnergy] = useState(0);

  function switchGraph(index) {
    setEnergy(index);
  }
  return (
    <MudContainer classes="mud-container-maxwidth-lg">
      <MudGrid classes="pt-8 gap-8 mb-10">
        <TrueDashSection
          title="Welcome to the Town Square"
          description="Something"
        >
          <MudItem classes="mud-grid-item-xs-12">
            <TrueCard>
              <TrueCardHeader>
                <MudCardHeaderContent>
                  <MudTypography typo="h5" classes="grey-text text-darken-1">
                    Consumption
                  </MudTypography>
                </MudCardHeaderContent>
                <TrueCardHeaderActions>
                  <MudRadioGroup action={switchGraph}>
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
          </MudItem>
        </TrueDashSection>

        <MudItem classes="mud-grid-item-xs-12">
          <MudGrid classes="mud-grid-spacing-xs-3">
            <MudItem classes="mud-grid-item-md-8">
              <TrueCard>
                <TrueCardHeader>
                  <MudCardHeaderContent>
                    <MudTypography typo="h5" classes="grey-text text-darken-1">
                      Usage
                    </MudTypography>
                  </MudCardHeaderContent>
                  <TrueCardHeaderActions>
                    <MudRadioGroup action={switchGraph}>
                      {"Power"}
                      {"Gas"}
                    </MudRadioGroup>
                  </TrueCardHeaderActions>
                </TrueCardHeader>

                <TrueCardContent>
                  <BarChart
                    items={[
                      { label: "Jan", value: 20000 },
                      { label: "Feb", value: 30000 },
                      { label: "March", value: 130000 },
                      { label: "April", value: 112340 },
                      { label: "May", value: 21129 },
                      { label: "June", value: 32129 },
                      { label: "July", value: 55556 },
                      { label: "Aug", value: 111237 },
                      { label: "Sept", value: 46820 },
                      { label: "Oct", value: 19300 },
                      { label: "Nov", value: 100347 },
                      { label: "Dec", value: 19234 },
                    ]}
                    height={300}
                  />
                </TrueCardContent>
              </TrueCard>
            </MudItem>

            <MudItem classes="mud-grid-item-md-4">
              <TrueCard>
                <TrueCardHeader>
                  <MudCardHeaderContent>
                    <MudTypography
                      typo="h5"
                      classes="grey-text text-darken-1 pb-3"
                    >
                      Forecast summary
                    </MudTypography>
                    <MudTypography
                      typo="body1"
                      classes="grey-text text-darken-1"
                    >
                      Combined Cost Forecast summary
                    </MudTypography>
                  </MudCardHeaderContent>
                  <TrueCardHeaderActions></TrueCardHeaderActions>
                </TrueCardHeader>
                <TrueCardContent>
                  <MudGrid classes="gap-4">
                    <MudItem classes="grey lighten-4 px-6 py-2 border-l-4 mud-border-warning mud-grid-item-xs-12">
                      <MudTypography
                        typo="body1"
                        classes="grey-text text-darken-2"
                      >
                        Rest of FY24
                      </MudTypography>
                      <MudTypography
                        typo="h2"
                        classes="grey-text text-darken-1"
                      >
                        3.00M £
                      </MudTypography>
                      <MudTypography
                        typo="body2"
                        classes="grey-text text-darken-1"
                      >
                        Rest of FY24
                      </MudTypography>
                    </MudItem>
                    <MudItem classes="grey lighten-4 px-6 py-2 border-l-4 mud-border-warning mud-grid-item-xs-12">
                      <MudTypography
                        typo="body1"
                        classes="grey-text text-darken-2"
                      >
                        Rest of FY24
                      </MudTypography>
                      <MudTypography
                        typo="h2"
                        classes="grey-text text-darken-1"
                      >
                        3.00M £
                      </MudTypography>
                      <MudTypography
                        typo="body2"
                        classes="grey-text text-darken-1"
                      >
                        Rest of FY24
                      </MudTypography>
                    </MudItem>
                    <MudItem classes="grey lighten-4 px-6 py-2 border-l-4 mud-border-warning mud-grid-item-xs-12">
                      <MudTypography
                        typo="body1"
                        classes="grey-text text-darken-2"
                      >
                        Rest of FY24
                      </MudTypography>
                      <MudTypography
                        typo="h2"
                        classes="grey-text text-darken-1"
                      >
                        3.00M £
                      </MudTypography>
                      <MudTypography
                        typo="body2"
                        classes="grey-text text-darken-1"
                      >
                        Rest of FY24
                      </MudTypography>
                    </MudItem>
                  </MudGrid>
                </TrueCardContent>
              </TrueCard>
            </MudItem>
          </MudGrid>
        </MudItem>
      </MudGrid>
    </MudContainer>
  );
}
