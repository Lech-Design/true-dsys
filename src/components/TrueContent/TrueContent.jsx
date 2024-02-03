export default function TrueContent(props) {
  let { children } = props;
  let classes = props.classes ? props.classes : "";
  return <div className={"mud-main-content " + classes}>{children}</div>;
}
