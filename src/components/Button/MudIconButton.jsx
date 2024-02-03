export default function MudIconButton(props) {
  let { children } = props;
  return (
    <>
      <button
        aria-label="Open menu"
        type="button"
        className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-icon-button-edge-end"
      >
        <span className="mud-icon-button-label">{children}</span>
      </button>
    </>
  );
}
