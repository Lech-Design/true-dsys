export default function MudItem(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"mud-grid-item" + classes}>{children}</div>;
}
