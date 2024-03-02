import MudCardHeader from "@/components/MudCard/MudCardHeader";

export default function TrueCardHeader(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudCardHeader classes="pa-0 ma-0 pb-10 align-center">
      {children}
    </MudCardHeader>
  );
}
