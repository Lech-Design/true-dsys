export default function MudDraw(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <aside className={"mud-drawer" + classes}>
      <div className="mud-drawer-content">{children}</div>
    </aside>
  );
}
