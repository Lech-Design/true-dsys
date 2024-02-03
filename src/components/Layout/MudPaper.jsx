export default function MudPaper(props) {
  let { children } = props;
  let outlined = props.outlined ? "mud-paper-outlined " : "";
  let elevation = props.elevation ? props.elevation : "0";
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <div
      className={`mud-paper ${outlined}mud-elevation-${elevation}${classes}`}
    >
      {children}
    </div>
  );
}
