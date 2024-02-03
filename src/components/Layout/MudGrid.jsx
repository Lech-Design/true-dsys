export default function MudGrid(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"mud-grid" + classes}>{children}</div>;
}
