export default function MudTableRow(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <tr className={"mud-table-row" + classes}>{children}</tr>;
}
