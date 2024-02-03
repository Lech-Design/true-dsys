export default function MudCardHeaderAvatar(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"mud-card-header-avatar " + classes}>{children}</div>;
}
