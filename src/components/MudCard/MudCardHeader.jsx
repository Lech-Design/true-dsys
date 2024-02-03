export default function MudCardHeader(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"mud-card-header" + classes}>{children}</div>;
}
