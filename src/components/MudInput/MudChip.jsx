export default function MudChip(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <div
      className={`mud-chip mud-chip-${props.variant} mud-chip-size-medium mud-chip-color-${props.color} mud-clickable mud-ripple ${props.selected}${classes}`}
      onClick={() => {
        props.action(props.chipId);
      }}
    >
      <span className="mud-chip-content">{children}</span>
    </div>
  );
}
