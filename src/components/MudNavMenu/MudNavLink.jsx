export default function MudNavLink(props) {
  let { label, action, Icon } = props;
  let classes = props.classes ? ` ${props.classes}` : "";

  return (
    <div className="mud-nav-item mud-ripple" onClick={action}>
      <a href="/" rel="" className={`mud-nav-link${classes}`}>
        <Icon classes="mud-nav-link-icon mud-nav-link-icon-default" />
        <div className="mud-nav-link-text">{label}</div>
      </a>
    </div>
  );
}
