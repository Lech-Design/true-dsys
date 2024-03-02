import MudCardHeaderContent from "@/components/MudCard/MudCardHeaderContent";

export default function TrueCardHeaderContent(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudCardHeaderContent classes="px-8 py-6">{children}</MudCardHeaderContent>
  );
}
