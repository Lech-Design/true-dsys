import MudCardActions from "@/components/MudCard/MudCardActions";

export default function TrueCardActions(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <MudCardActions classes="justify-end">{children}</MudCardActions>;
}
