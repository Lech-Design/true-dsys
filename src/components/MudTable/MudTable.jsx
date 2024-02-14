import MudTableHead from "./MudTableHead";
import MudRowNetZero from "./NetZero/MudRowNetZero";

export default function MudTable(props) {
  let headers = [
    "Reporting Period",
    "Emissions Breakdown",
    "Total Emissions",
    "Actions",
    "",
  ];
  let cols = [25, 35, 20, 15, 5];

  let { children } = props;
  let outlined = props.outlined ? "mud-table-outlined " : "";
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <>
      <div
        className={`mud-table ${outlined}mud-table-dense mud-table-hover mud-elevation-0${classes}`}
      >
        <div className="mud-table-container">
          <table className="mud-table-root">
            <colgroup>
              {cols.map((col, index) => {
                return <col key={index} style={{ width: col + "%" }} />;
              })}
            </colgroup>
            <MudTableHead>
              {headers.map((item, index) => {
                return item;
              })}
            </MudTableHead>

            <tbody className="mud-table-body">
              <MudRowNetZero />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
