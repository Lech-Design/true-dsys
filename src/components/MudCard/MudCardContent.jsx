export default function MudCardContent(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"mud-card-content" + classes}>{children}</div>;
}
