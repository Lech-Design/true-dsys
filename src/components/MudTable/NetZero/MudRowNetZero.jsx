import MudGrid from "@/components/Layout/MudGrid";
import MudTableRow from "../MudTableRow";
import MudTableCell from "../MudTableCell";
import MudProgress from "@/components/MudProgress/MudProgress";
import IconEdit from "@/components/Icons/Edit";
import IconDelete from "@/components/Icons/Delete";
import MudIconButton from "@/components/Button/MudIconButton";
import IconDropDown from "@/components/Icons/DropDown";
import MudItem from "@/components/Layout/MudItem";

export default function MudRowNetZero(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudTableRow>
      <MudTableCell classes="pl-8" dataLabel="Period">
        01/01/2023 - 31/12/2023
      </MudTableCell>

      <MudTableCell classes="pr-12">
        <span className="d-flex align-center gap-4 pt-4">
          <MudProgress
            rounded={true}
            medium={true}
            value={75}
            color="tertiary"
          />
          <span className="mud-typography mud-typography-caption">25.0%</span>
        </span>
        <span className="d-flex align-center gap-4">
          <MudProgress
            rounded={true}
            medium={true}
            value={66}
            color="warning"
          />
          <span className="mud-typography mud-typography-caption">33.3%</span>
        </span>
        <span className="d-flex align-center gap-4 pb-4">
          <MudProgress
            rounded={true}
            medium={true}
            value={59}
            color="success"
          />
          <span className="mud-typography mud-typography-caption">41.7%</span>
        </span>
      </MudTableCell>

      <MudTableCell>13332.00 kgCO₂e</MudTableCell>

      <MudTableCell>
        <MudGrid classes="gap-2">
          <MudItem>
            <MudIconButton
              color="secondary"
              size="medium"
              variant="filled"
              classes=""
            >
              <IconEdit />
            </MudIconButton>
          </MudItem>

          <MudItem>
            <MudIconButton
              color="secondary"
              size="medium"
              variant="outlined"
              classes=""
            >
              <IconDelete />
            </MudIconButton>
          </MudItem>
        </MudGrid>
      </MudTableCell>

      <MudTableCell>
        <MudIconButton small={true} color="primary">
          <IconDropDown />
        </MudIconButton>
      </MudTableCell>
    </MudTableRow>
  );
}
