export default function MudContainer(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"mud-container" + classes}>{children}</div>;
}
