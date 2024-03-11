import MudLayout from "@/components/Layout/MudLayout";
import MudNavMenu from "@/components/MudNavMenu/MudNavMenu";
import MudDrawLeftNav from "@/components/MudDrawer/MudDrawerLeftNav";
import MudNavSide from "@/components/MudNavMenu/MadNavMenuSide";
import MudContent from "@/components/MudContent/MudContent";

export default function TrueLayoutPrimary(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudLayout classes="mud-drawer-open-responsive-md-left">
      <MudNavMenu />

      <MudDrawLeftNav>
        <MudNavSide>
          {"Dashboard"}
          {"Net Zero"}
          {"Procurement"}
        </MudNavSide>
      </MudDrawLeftNav>
      <MudContent>
        <div
          style={{
            width: "100%",
            height: "500px",
            background: "#fff",
            margin: "2rem",
          }}
        ></div>
      </MudContent>
    </MudLayout>
  );
}
