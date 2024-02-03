import TrueContent from "@/components/TrueContent/TrueContent";
import MudContainer from "@/components/Layout/MudContainer";
import MudGrid from "@/components/Layout/MudGrid";
import MudItem from "@/components/Layout/MudItem";
import MudPaper from "@/components/Layout/MudPaper";
import CardPatternDefault from "@/components/PatternsComponents/CardPattern/CardDefault";
import Toolbar from "@/components/MudToolbar/MudToolBar";
import MudDrawLeftNav from "@/components/MudDrawer/MudDrawerLeftNav";
import MudLayout from "@/components/Layout/MudLayout";

import MudTabs from "@/components/MudTabs/MudTabs";
import DownloadReport from "@/components/Drawers/DownloadReport";
import FilterDrawer from "@/components/Drawers/Filter";

import MudTypography from "@/components/MudTypography/MudTypography";

export default function ExamplePage(props) {
  return (
    <MudLayout classes="mud-drawer-open-responsive-md-left">
      <Toolbar />
      <MudDrawLeftNav />
      {/* <FilterDrawer /> */}
      {/* <DownloadReport /> */}
      <TrueContent>
        <MudContainer>
          <MudTabs items={["Tab 1", "Tab 2"]} vertical={false} rounded={false}>
            <MudTypography typo="h1">Tab 1</MudTypography>
            <MudTypography typo="h2">Tab 2</MudTypography>
          </MudTabs>
          <MudGrid>
            <MudItem classes="mud-grid-item-xs-12 mud-grid-item-md-3 pa-4">
              <CardPatternDefault />
            </MudItem>
            <MudItem classes="mud-grid-item-xs-12 mud-grid-item-md-3 pa-4">
              <CardPatternDefault />
            </MudItem>
            <MudItem classes="mud-grid-item-xs-12 mud-grid-item-md-3 pa-4">
              <CardPatternDefault />
            </MudItem>
            <MudItem classes="mud-grid-item-xs-12 mud-grid-item-md-3 pa-4">
              <CardPatternDefault />
            </MudItem>
          </MudGrid>
        </MudContainer>
      </TrueContent>
    </MudLayout>
  );
}
