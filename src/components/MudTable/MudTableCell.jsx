export default function MudTableCell(props) {
  let { children, dataLabel } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <td className={"mud-table-cell" + classes} data-label={dataLabel}>
      {children}
    </td>
  );
}
