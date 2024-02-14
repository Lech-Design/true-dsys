export default function MudCard(props) {
  let { children } = props;
  let color = props.color ? ` mud-border-${props.color}` : "";
  let outlined = props.outlined ? " mud-paper-outlined" : "";
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <div className={`mud-paper mud-card${outlined}${color}` + classes}>
      {children}
    </div>
  );
}
