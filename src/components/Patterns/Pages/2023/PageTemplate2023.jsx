import MudToolBar from "@/components/MudToolbar/MudToolBar";
import MudContent from "@/components/MudContent/MudContent";
import MudLayout from "@/components/Layout/MudLayout";
import MudNavMenu from "@/components/MudNavMenu/MudNavMenu";

export default function PageTemplateOld(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudLayout
    // classes="mud-drawer-open-responsive-md-left"
    >
      <MudNavMenu />
      {/* <MudDrawLeftNav /> */}
      <MudContent>
        <MudToolBar />
        {/* <EmissionsPage /> */}
        {children}
      </MudContent>
    </MudLayout>
  );
}
