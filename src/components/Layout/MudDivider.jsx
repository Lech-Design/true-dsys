export default function MudDivider(props) {
  let classes = props.classes ? ` ${props.classes}` : "";
  return <hr className={"mud-divider" + classes} />;
}
