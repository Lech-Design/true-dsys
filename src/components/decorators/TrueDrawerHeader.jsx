import MudDrawerHeader from "@/components/MudDrawer/MudDrawerHeader";

export default function TrueDrawerHeader(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudDrawerHeader
      classes={"mud-grid-item-xs-12 pl-4 pr-2 pt-2 pb-2" + classes}
    >
      {children}
    </MudDrawerHeader>
  );
}
