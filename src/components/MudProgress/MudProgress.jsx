export default function MudProgress(props) {
  let { children, value, color } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  let medium = props.medium
    ? "mud-progress-linear-medium"
    : "mud-progress-linear-small";
  let rounded = props.rounded ? "mud-progress-linear-rounded " : "";
  return (
    <div
      className={`mud-progress-linear ${medium} ${rounded}mud-progress-linear-color-${color} horizontal mud-flip-x-rtl my-3`}
      role="progressbar"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div className="mud-progress-linear-bars">
        <div
          className="mud-progress-linear-bar"
          style={{ transform: `translateX(${-value}%)` }}
        ></div>
      </div>
    </div>
  );
}
