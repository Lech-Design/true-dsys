export default function MudDraw(props) {
  let { children, open, action } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <>
      <aside className={"mud-drawer" + classes}>{children}</aside>
      {open ? (
        <div
          className="mud-overlay mud-drawer-overlay mud-overlay-drawer mud-drawer-pos-left mud-drawer-overlay--open mud-drawer-overlay-temporary mud-drawer-overlay-md"
          onClick={action}
        >
          <div className="mud-overlay-scrim mud-overlay-dark"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
