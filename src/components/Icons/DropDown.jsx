export default function IconDropDown(props) {
  let size = props.size ? props.size : "medium";

  return (
    <svg
      aria-label="Icon"
      className={`mud-icon-root mud-svg-icon mud-icon-size-${size}`}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </svg>
  );
}
