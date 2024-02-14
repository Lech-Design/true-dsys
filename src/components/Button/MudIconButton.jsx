export default function MudIconButton(props) {
  let { children, size, color, variant } = props;
  let square = props.square ? " mud-button" : "";

  let outlined = props.outlined
    ? ` mud-button-outlined mud-button-outlined-${props.color}`
    : "";
  return (
    <>
      <button
        aria-label="Open menu"
        type="button"
        className={`mud-button-root mud-icon-button${square} mud-button-${variant} mud-button-${variant}-${color} mud-button-${variant}-size-${size} mud-ripple mud-icon-button-size-${size}`}
        onClick={props.action}
      >
        <span className="mud-icon-button-label">{children}</span>
      </button>
    </>
  );
}
