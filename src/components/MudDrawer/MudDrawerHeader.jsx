export default function MudDrawerHeader(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"mud-drawer-header" + classes}>{children}</div>;
}
