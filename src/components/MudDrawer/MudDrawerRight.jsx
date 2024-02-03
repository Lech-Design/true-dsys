import MudDraw from "./MudDrawer";

export default function MudDrawRight(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudDraw
      classes={
        "mud-drawer mud-drawer-fixed mud-drawer-pos-right mud-drawer--open mud-drawer-md mud-drawer-clipped-never mud-elevation-1 mud-drawer-temporary modify-item-draw" +
        classes
      }
    >
      {children}
    </MudDraw>
  );
}
