export default function MudLayout(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"mud-layout" + classes}>{children}</div>;
}
