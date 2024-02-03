export default function MudButton(props) {
  let { children } = props;
  let style = "";
  let spanStyle = "";
  let classes = props.classes ? ` ${props.classes}` : "";
  switch (props.variant) {
    case "primary":
      style =
        "mud-button-root mud-button mud-button-filled mud-button-filled-primary mud-button-filled-size-medium mud-ripple ml-auto";
      spanStyle = "mud-typography-body1";
      break;
    case "secondary":
      style =
        "mud-button-root mud-button mud-button-filled mud-button-filled-secondary mud-button-filled-size-medium mud-ripple";
      spanStyle = "mud-typography-body1";
      break;
    case "outlined":
      style =
        "mud-button-root mud-button mud-button-outlined mud-button-outlined-secondary mud-button-outlined-size-medium mud-ripple";
      break;
  }

  return (
    <button className={style + classes}>
      <span className={"mud-button-label " + { spanStyle }}>
        {props.label ? <p>{props.label}</p> : <p>{children}</p>}
      </span>
    </button>
  );
}
