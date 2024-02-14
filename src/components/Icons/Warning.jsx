export default function IconWarning(props) {
  let size = props.size ? props.size : "medium";
  return (
    <svg
      className={`mud-icon-root mud-svg-icon mud-icon-size-${size}`}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
    </svg>
  );
}
