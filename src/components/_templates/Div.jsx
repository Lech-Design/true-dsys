export default function Something(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={" " + classes}>{children}</div>;
}
