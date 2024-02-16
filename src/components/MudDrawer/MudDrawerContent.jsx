export default function MudDrawerContent(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"mud-drawer-content" + classes}>{children}</div>;
}
