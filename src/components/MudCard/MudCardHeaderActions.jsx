export default function MudCardHeaderActions(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"mud-card-header-actions" + classes}>{children}</div>;
}
