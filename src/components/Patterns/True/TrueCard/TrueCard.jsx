import MudCard from "@/components/MudCard/MudCard";

export default function TrueCard(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudCard classes="px-8 py-6" outlined={true}>
      {children}
    </MudCard>
  );
}
