export default function Dashboard(props) {
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <svg
      className={`mud-icon-root mud-svg-icon mud-icon-size-medium${classes}`}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
    </svg>
  );
}
