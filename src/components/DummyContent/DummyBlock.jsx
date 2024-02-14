export default function DummyBlock(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <div className={"tr-docs--dummy-block" + classes}>{children}</div>;
}
