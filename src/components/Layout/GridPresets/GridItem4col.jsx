import MudItem from "../MudItem";

export default function GridItem_4col(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudItem classes={"mud-grid-item-xs-12 mud-grid-item-md-3 pa-4" + classes}>
      {children}
    </MudItem>
  );
}
