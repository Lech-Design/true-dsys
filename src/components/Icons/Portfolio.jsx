export default function Portfolio(props) {
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <svg
      className={`mud-icon-root mud-svg-icon mud-icon-size-medium${classes}`}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <title>LocationCity</title>
      <g>
        <rect fill="none" height="24" width="24"></rect>
      </g>
      <g>
        <path d="M17,11V3H7v4H3v14h8v-4h2v4h8V11H17z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11z M11,15H9v-2h2V15z M11,11H9V9h2 V11z M11,7H9V5h2V7z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z M15,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z"></path>
      </g>{" "}
    </svg>
  );
}
