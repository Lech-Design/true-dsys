export default function MudCard(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"mud-card" + classes}>{children}</div>;
}
