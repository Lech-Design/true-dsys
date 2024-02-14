export default function MudFab(props) {
  let { children, size, color, tip, elevation } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  //   let outlined = props.outlined
  //     ? ` mud-button-outlined mud-button-outlined-${color}`
  //     : "";
  let disableElevation = elevation ? "" : " mud-fab-disable-elevation";
  return (
    <button
      type="button"
      title={tip}
      className={`mud-button-root mud-fab mud-fab-${color} mud-fab-size-${size} mud-ripple${classes}${disableElevation}`}
    >
      <span className="mud-fab-label">{children}</span>
    </button>
  );
}
