export default function MudTableHead(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  let firstItem = "mud-table-cell pt-5 pb-5 pl-8";
  return (
    <thead className={"mud-table-head" + classes}>
      <tr className="mud-table-row">
        {children.map((item, index) => {
          return (
            <th
              key={index}
              scope="col"
              className={index === 0 ? firstItem : "mud-table-cell"}
            >
              {item}
            </th>
          );
        })}

        {/* <th scope="col" className="mud-table-cell pt-5 pb-5 pl-8">
          Reporting Period
        </th>
        <th scope="col" className="mud-table-cell">
          Emissions Breakdown
        </th>
        <th scope="col" className="mud-table-cell">
          Total Emissions
        </th>
        <th scope="col" className="mud-table-cell">
          Actions
        </th>
        <th scope="col" className="mud-table-cell"></th> */}
      </tr>
    </thead>
  );
}
