import MudCardContent from "@/components/MudCard/MudCardContent";

export default function TrueCardContent(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <MudCardContent classes="pa-0 ma-0">{children}</MudCardContent>;
}
