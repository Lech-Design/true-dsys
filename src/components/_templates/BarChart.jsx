export default function BarChart(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  let increment = (props.height / 1400000) * 10;
  return (
    <div className={"tr-bar-chart" + classes}>
      <div>
        <div>£1.4M</div>
        <div>£1.2M</div>
        <div>£1.0M</div>
        <div>£800k</div>
        <div>£600k</div>
        <div>£400k</div>
        <div>£200k</div>
        <div>£0.0</div>
      </div>
      <div>
        <div style={{ height: `${props.height}px` }}>
          {props.items.map((item, index) => {
            return (
              <div
                key={index}
                style={{ height: `${item.value * increment}px` }}
              ></div>
            );
          })}
        </div>
        <div>
          {props.items.map((item, index) => {
            return <div key={index}>{item.label}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
