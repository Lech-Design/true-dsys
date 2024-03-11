export default function MudRadioButton(props) {
  let { children, action, index } = props;
  let checked = props.checked ? " mud-checked" : "";
  let classes = props.classes ? ` ${props.classes}` : "";

  return (
    <label className="mud-radio mud-radio-content-placement-end">
      <span
        className={`mud-button-root mud-icon-button mud-ripple mud-ripple-radio mud-primary-text hover:mud-primary-hover${checked} py-0`}
      >
        <span
          onClick={() => {
            action(index);
          }}
          className="mud-radio-button"
        >
          <input
            aria-checked="true"
            aria-disabled="false"
            role="radio"
            type="radio"
            className="mud-radio-input"
            name="28b132e4-98dd-4d6f-98e4-be9967af2832"
          />
          <span className={`mud-radio-icons${checked}`}>
            <svg
              className="mud-icon-root mud-svg-icon mud-icon-size-medium"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </svg>

            <svg
              className="mud-icon-root mud-svg-icon mud-radio-icon-checked mud-icon-size-medium"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path>
            </svg>
          </span>
        </span>
      </span>
      <span className="mud-radio-content mud-typography mud-typography-body1">
        {children}
      </span>
    </label>
  );
}
