import Link from "next/link";

export default function MudNavMenu(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return (
    <header className="mud-appbar mud-appbar-fixed-top mud-elevation-25">
      <div className="mud-toolbar mud-toolbar-gutters mud-toolbar-appbar">
        <Link href="/">
          <img
            src="https://image.trueintel.net/customer/logos/TRUE_White_Logo.svg"
            height="35"
            alt="True Logo"
          />
        </Link>

        <h6 className="mud-typography mud-typography-h6 ml-4">
          Bill Validation
        </h6>

        <div className="flex-grow-1"></div>
        <div className="mud-menu mt-1 ml-4">
          <div className="mud-menu-activator">
            <div className="mud-avatar mud-avatar-medium mud-avatar-filled mud-avatar-filled-default mud-elevation-0">
              <img
                src="https://secure.gravatar.com/avatar/f37215a9b79e57cb19c6ba58b9c256e4?s=120"
                className="mud-image object-fill object-center"
              />
            </div>
          </div>
          <div
            id="popover-28bd8858-03de-4eed-94c6-176bd598b3ad"
            className="mud-popover-cascading-value"
          ></div>
        </div>
      </div>
    </header>
  );
}
