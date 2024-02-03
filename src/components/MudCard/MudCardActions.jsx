export default function MudCardActions(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"mud-card-actions" + classes}>{children}</div>;
}
