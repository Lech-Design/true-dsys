import MudDraw from "./MudDrawer";

export default function MudDrawRight(props) {
  let { children, action } = props;
  let open = props.open ? "open" : "closed";
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudDraw
      classes={
        `mud-drawer-fixed mud-drawer-pos-right mud-drawer--${open} mud-drawer-md mud-drawer-clipped-never mud-elevation-1 mud-drawer-temporary modify-item-draw` +
        classes
      }
      open={props.open}
      action={action}
    >
      {children}
    </MudDraw>
  );
}
