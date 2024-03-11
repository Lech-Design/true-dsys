import MudIconButton from "../Button/MudIconButton";
import IconDrawer from "../Icons/Drawer";
import BreadCrumbs from "../Breadcrumbs/Breadcrumbs";

export default function MudToolBar(props) {
  let classes = props.classes ? ` ${props.classes}` : "";
  let { children } = props;
  return (
    <div className={"mud-toolbar" + classes}>
      {/* <MudIconButton classes="mud-inherit-text hover:mud-inherit-hover mud-ripple mud-ripple-icon ml-3">
        <IconDrawer classes="mud-icon-button-label" />
      </MudIconButton> */}
      <BreadCrumbs classes="mud-breadcrumbs mud-typography-body1" />
    </div>
  );
}
