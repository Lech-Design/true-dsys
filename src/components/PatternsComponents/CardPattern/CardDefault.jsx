import MudCard from "@/components/MudCard/MudCard";
import MudCardHeader from "@/components/MudCard/MudCardHeader";
import MudCardHeaderAvatar from "@/components/MudCard/MudCardHeaderAvatar";
import MudCardHeaderContent from "@/components/MudCard/MudCardHeaderContent";
import MudCardHeaderActions from "@/components/MudCard/MudCardHeaderActions";
import MudCardContent from "@/components/MudCard/MudCardContent";
import MudCardActions from "@/components/MudCard/MudCardActions";
import MudTypography from "@/components/MudTypography/MudTypography";
import MudPaper from "@/components/Layout/MudPaper";

import DummyTitle from "@/components/DummyContent/DummyTitle";
import DummyText from "@/components/DummyContent/DummyText";

export default function CardPatternDefault(props) {
  return (
    <MudPaper outlined={true}>
      <MudCard>
        <MudCardHeader classes="pb-0">
          <MudCardHeaderContent>
            <MudTypography typo="h6">
              <DummyTitle />
            </MudTypography>
          </MudCardHeaderContent>
        </MudCardHeader>
        <MudCardContent>
          <DummyText />
        </MudCardContent>
      </MudCard>
    </MudPaper>
  );
}
