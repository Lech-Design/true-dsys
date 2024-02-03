export default function BreadCrumbItem(props) {
  let { children } = props;
  return <li className={props.classes}>{children}</li>;
}
