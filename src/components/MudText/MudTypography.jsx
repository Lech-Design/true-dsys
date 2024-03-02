export default function MudTypography(props) {
  let { children } = props;
  let h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    subtitle1,
    subtitle2,
    body1,
    body2,
    button,
    caption,
    overline;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <>
      {props.typo === "h1" && (
        <h1 className={"mud-typography mud-typography-h1" + classes}>
          {children}
        </h1>
      )}
      {props.typo === "h2" && (
        <h2 className={"mud-typography mud-typography-h2" + classes}>
          {children}
        </h2>
      )}
      {props.typo === "h3" && (
        <h3 className={"mud-typography mud-typography-h3" + classes}>
          {children}
        </h3>
      )}
      {props.typo === "h4" && (
        <h4 className={"mud-typography mud-typography-h4" + classes}>
          {children}
        </h4>
      )}
      {props.typo === "h5" && (
        <h5 className={"mud-typography mud-typography-h5" + classes}>
          {children}
        </h5>
      )}
      {props.typo === "h6" && (
        <h6 className={"mud-typography mud-typography-h6" + classes}>
          {children}
        </h6>
      )}
      {props.typo === "subtitle1" && (
        <h6 className={"mud-typography mud-typography-subtitle1" + classes}>
          {children}
        </h6>
      )}
      {props.typo === "subtitle2" && (
        <h6 className={"mud-typography mud-typography-subtitle2" + classes}>
          {children}
        </h6>
      )}
      {props.typo === "body1" && (
        <p className={"mud-typography mud-typography-body1" + classes}>
          {children}
        </p>
      )}
      {props.typo === "body2" && (
        <p className={"mud-typography mud-typography-body2" + classes}>
          {children}
        </p>
      )}
      {props.typo === "caption" && (
        <span className={"mud-typography mud-typography-body2" + classes}>
          {children}
        </span>
      )}
    </>
  );
}
