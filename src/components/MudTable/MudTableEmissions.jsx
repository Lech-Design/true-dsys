import MudProgress from "../MudProgress/MudProgress";
import MudTableHead from "./MudTableHead";
import MudRowNetZero from "./NetZero/MudRowNetZero";
import MudTableRow from "./MudTableRow";
import MudTableCell from "./MudTableCell";
import MudFab from "../Button/MudFab";
import IconEdit from "../Icons/Edit";
import IconDelete from "../Icons/Delete";
import IconDropDown from "../Icons/DropDown";
import MudIconButton from "../Button/MudIconButton";
import MudGrid from "../Layout/MudGrid";

export default function MudTableEmissions(props) {
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
              <MudRowNetZero />
              <MudRowNetZero />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
