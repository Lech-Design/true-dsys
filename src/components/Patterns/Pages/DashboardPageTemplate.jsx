import MudToolBar from "@/components/MudToolbar/MudToolBar";
import MudContent from "@/components/MudContent/MudContent";
import MudLayout from "@/components/Layout/MudLayout";
import MudDrawLeftNav from "@/components/MudDrawer/MudDrawerLeftNav";
import DashboardTemplate from "../Dashboard/DashboardTemplate";
import DummyPage from "./DummyPage";
import MudNavMenu from "@/components/MudNavMenu/MudNavMenu";

export default function PageTemplate(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudLayout classes="mud-drawer-open-responsive-md-left">
      <MudNavMenu />
      {/* <MudDrawLeftNav /> */}
      <MudContent>
        {/* <MudToolBar /> */}
        {/* <EmissionsPage /> */}
        {/* <DummyPage /> */}
        <DashboardTemplate />
      </MudContent>
    </MudLayout>
  );
}
