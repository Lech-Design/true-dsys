import MudButton from "../MudButton";

export default function TrueHeaderButton(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <MudButton variant="outlined" size="small" classes={classes}>
      {children}
    </MudButton>
  );
}
