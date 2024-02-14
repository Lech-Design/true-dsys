export default function IconChevronDown(props) {
  let size = props.size ? props.size : "medium";

  return (
    <svg
      aria-label="Icon"
      className={`mud-icon-root mud-icon-default mud-svg-icon mud-icon-size-${size}`}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M7 10l5 5 5-5z"></path>
    </svg>
  );
}
