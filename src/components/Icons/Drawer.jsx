export default function IconDrawer(props) {
  let { children } = props;
  return (
    <span className={props.classes}>
      <svg
        className="mud-icon-root mud-svg-icon mud-icon-size-medium"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M0 0h24v24H0V0z" fill="none"></path>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </svg>
    </span>
  );
}
