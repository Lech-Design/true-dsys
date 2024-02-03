export default function MudCardHeaderContent(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"mud-card-header-content" + classes}>{children}</div>;
}
