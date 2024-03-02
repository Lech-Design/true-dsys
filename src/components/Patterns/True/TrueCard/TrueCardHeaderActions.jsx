import MudCardHeaderActions from "@/components/MudCard/MudCardHeaderActions";

export default function TrueCardHeaderActions(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudCardHeaderActions classes="pa-0 ma-0 align-self-center">
      {children}
    </MudCardHeaderActions>
  );
}
