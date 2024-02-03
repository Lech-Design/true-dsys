import MudItem from "../MudItem";

export default function GridItemDrawerHeader(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudItem classes={"mud-grid-item-xs-12 pl-4 pr-6 pt-2 pb-2" + classes}>
      {children}
    </MudItem>
  );
}
