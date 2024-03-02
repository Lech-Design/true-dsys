export default function MudButton(props) {
  let { children, color } = props;
  let Icon = props.icon;
  let size = props.size ? props.size : "medium";
  let style = "";
  let spanStyle = "";
  let classes = props.classes ? ` ${props.classes}` : "";
  switch (props.variant) {
    case "primary":
      style = ` mud-button-root mud-button mud-button-filled mud-button-filled-primary mud-button-filled-size-${size} mud-ripple`;
      spanStyle = "mud-typography-body1";
      break;
    case "secondary":
      style = `mud-button-root mud-button mud-button-filled mud-button-filled-secondary mud-button-filled-size-${size} mud-ripple`;
      spanStyle = "mud-typography-body1";
      break;
    case "outlined":
      style = `mud-button-root mud-button mud-button-outlined mud-button-outlined-secondary mud-button-outlined-size-${size} mud-ripple`;
      break;
    case "text":
      style = `mud-button-root mud-button mud-button-text mud-button-text-default mud-button-text-size-${size} mud-ripple`;
      break;
    default:
      style = `mud-button-root mud-button mud-button-text mud-button-text-${color} mud-button-text-size-${size} mud-ripple`;
  }

  return (
    <button className={style + classes} onClick={props.action}>
      <span className={"mud-button-label " + spanStyle}>
        {props.icon ? (
          <span className="mud-button-icon-start mud-button-icon-size-medium">
            <Icon />
          </span>
        ) : (
          ""
        )}
        {props.label ? <>props.label</> : <>{children}</>}
      </span>
    </button>
  );
}
