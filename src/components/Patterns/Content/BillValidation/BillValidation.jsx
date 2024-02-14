import MudContainer from "@/components/Layout/MudContainer";
import MudGrid from "@/components/Layout/MudGrid";
import TruePageHeader from "../../True/TruePageHeader";
import MudButton from "@/components/Button/MudButton";
import MudItem from "@/components/Layout/MudItem";
import MudAlert from "@/components/MudAlert/MudAlert";
import TrueCardBill from "@/components/Patterns/True/TrueCardBill";
import IconDownload from "@/components/Icons/Download";
import DownloadReport from "@/components/Drawers/DownloadReport";

import { useState } from "react";

export default function BillValidation(props) {
  let [open, setOpen] = useState(false);
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";

  function openDraw() {
    setOpen((open = !open));
    console.log(open);
  }
  return (
    <>
      <DownloadReport action={openDraw} open={open} />
      <MudContainer classes="mud-container-maxwidth-lg">
        <MudAlert
          classes="mt-4 mb-6"
          variant="text"
          close={true}
          color="error"
          dense={false}
          square={false}
          label="There has been a problem contacting bill validation service. Please try again later."
        ></MudAlert>
        <MudGrid classes="pt-4">
          <TruePageHeader
            title="Bill validation summary"
            description="Enter and track your Scope 1, 2, and 3 emissions annually. Set your
            baseline year and monitor your progress over time."
          >
            <MudButton
              variant="outlined"
              size="small"
              action={openDraw}
              icon={IconDownload}
            >
              Download report
            </MudButton>
          </TruePageHeader>
          <MudItem classes="mud-grid-item-xs-12">
            <MudGrid classes="mud-grid-spacing-xs-3">
              <MudItem classes="mud-grid-item-xs-6 mud-grid-item-sm-3">
                <TrueCardBill outlined={true}>
                  {"Invoices processed"}
                  {"2533"}
                  {<b>16662 €</b>}
                </TrueCardBill>
              </MudItem>
              <MudItem classes="mud-grid-item-xs-6 mud-grid-item-sm-3">
                <TrueCardBill outlined={true} color={"success"}>
                  {"Invoices processed"}
                  {"2533"}
                  {<b>16662 €</b>}
                </TrueCardBill>
              </MudItem>
              <MudItem classes="mud-grid-item-xs-6 mud-grid-item-sm-3">
                <TrueCardBill outlined={true} color={"success"}>
                  {"Invoices processed"}
                  {"2533"}
                  {<b>16662 €</b>}
                </TrueCardBill>
              </MudItem>
              <MudItem classes="mud-grid-item-xs-6 mud-grid-item-sm-3">
                <TrueCardBill outlined={true} color={"success"}>
                  {"Invoices processed"}
                  {"2533"}
                  {<b>16662 €</b>}
                </TrueCardBill>
              </MudItem>
            </MudGrid>
          </MudItem>
        </MudGrid>
      </MudContainer>
    </>
  );
}
