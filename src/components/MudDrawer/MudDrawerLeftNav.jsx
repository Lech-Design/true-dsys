import MudDraw from "./MudDrawer";

export default function MudDrawLeftNav(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudDraw
      classes={
        "mud-drawer-fixed mud-drawer-pos-left mud-drawer--open mud-drawer--initial mud-drawer-md mud-drawer-clipped-always mud-elevation-1 mud-drawer-responsive mud-drawer-mini" +
        classes
      }
    >
      {children}
    </MudDraw>
  );
}
