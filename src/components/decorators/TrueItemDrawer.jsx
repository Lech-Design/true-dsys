import MudItem from "../Layout/MudItem";

export default function TrueItemDrawer(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudItem classes={"mud-grid-item-xs-12 pl-6 pr-6 pt-8 pb-1" + classes}>
      {children}
    </MudItem>
  );
}
