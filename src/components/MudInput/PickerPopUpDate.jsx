export default function PickerPopupDate(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";

  return (
    <div
      className="mud-picker-inline-paper absolute"
      onClick={props.toggleAction}
    >
      <div
        className="mud-paper mud-elevation-8 mud-picker mud-picker-paper mud-picker-view mud-picker-open mud-picker-popover-paper"
        // style=""
      >
        <div className="mud-picker-container">
          <div className="mud-toolbar mud-toolbar-gutters mud-picker-toolbar mud-theme-primary mud-picker-datepicker-toolbar">
            <button
              type="button"
              className="mud-button-root mud-button mud-button-text mud-button-text-inherit mud-button-text-size-medium mud-ripple mud-button-year"
            >
              <span className="mud-button-label">2024</span>
            </button>
            <button
              type="button"
              className="mud-button-root mud-button mud-button-text mud-button-text-inherit mud-button-text-size-medium mud-ripple mud-button-date"
            >
              <span className="mud-button-label">Tue, 30 Jan</span>
            </button>
          </div>
          <div className="mud-picker-content">
            <div
              id="1e7e9cf3-4eae-46e3-bf52-1b5c45707ab3"
              className="mud-picker-calendar-content mud-picker-calendar-content-1"
            >
              <div className="mud-picker-calendar-container">
                <div className="mud-picker-calendar-header mud-picker-calendar-header-1 mud-picker-calendar-header-last">
                  <div className="mud-picker-calendar-header-switch">
                    <button
                      aria-label="Go to previous month December 2023"
                      type="button"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-nav-button-prev mud-flip-x-rtl"
                    >
                      <span className="mud-icon-button-label">
                        <svg
                          className="mud-icon-root mud-svg-icon mud-icon-size-medium"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                        </svg>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="mud-picker-slide-transition mud-picker-calendar-header-transition mud-button-month"
                    >
                      <p className="mud-typography mud-typography-body1 mud-typography-align-center">
                        January 2024
                      </p>
                    </button>
                    <button
                      aria-label="Go to next month February 2024"
                      type="button"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-nav-button-next mud-flip-x-rtl"
                      // _bl_2531=""
                    >
                      <span className="mud-icon-button-label">
                        <svg
                          className="mud-icon-root mud-svg-icon mud-icon-size-medium"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="mud-picker-calendar-header-day">
                    <span className="mud-typography mud-typography-caption mud-day-label">
                      Mon
                    </span>
                    <span className="mud-typography mud-typography-caption mud-day-label">
                      Tue
                    </span>
                    <span className="mud-typography mud-typography-caption mud-day-label">
                      Wed
                    </span>
                    <span className="mud-typography mud-typography-caption mud-day-label">
                      Thu
                    </span>
                    <span className="mud-typography mud-typography-caption mud-day-label">
                      Fri
                    </span>
                    <span className="mud-typography mud-typography-caption mud-day-label">
                      Sat
                    </span>
                    <span className="mud-typography mud-typography-caption mud-day-label">
                      Sun
                    </span>
                  </div>
                </div>
                <div className="mud-picker-calendar-transition mud-picker-slide-transition">
                  <div className="mud-picker-calendar">
                    <button
                      type="button"
                      // style={"--day-id: 1;"}
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Monday, 01 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        1
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 2;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Tuesday, 02 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        2
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 3;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Wednesday, 03 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        3
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 4;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Thursday, 04 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        4
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 5;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Friday, 05 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        5
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 6;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Saturday, 06 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        6
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 7;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Sunday, 07 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        7
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 8;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Monday, 08 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        8
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 9;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Tuesday, 09 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        9
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 10;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Wednesday, 10 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        10
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 11;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Thursday, 11 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        11
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 12;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Friday, 12 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        12
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 13;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Saturday, 13 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        13
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 14;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Sunday, 14 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        14
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 15;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Monday, 15 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        15
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 16;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Tuesday, 16 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        16
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 17;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Wednesday, 17 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        17
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 18;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Thursday, 18 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        18
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 19;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Friday, 19 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        19
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 20;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Saturday, 20 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        20
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 21;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Sunday, 21 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        21
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 22;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Monday, 22 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        22
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 23;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Tuesday, 23 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        23
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 24;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Wednesday, 24 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        24
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 25;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Thursday, 25 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        25
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 26;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Friday, 26 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        26
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 27;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Saturday, 27 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        27
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 28;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Sunday, 28 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        28
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 29;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Monday, 29 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        29
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 30;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day  mud-selected mud-theme-primary"
                      aria-label="Tuesday, 30 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        30
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 31;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day"
                      aria-label="Wednesday, 31 January 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        31
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 32;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day  mud-hidden"
                      aria-label="Thursday, 01 February 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        1
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 33;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day  mud-hidden"
                      aria-label="Friday, 02 February 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        2
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 34;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day  mud-hidden"
                      aria-label="Saturday, 03 February 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        3
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 35;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day  mud-hidden"
                      aria-label="Sunday, 04 February 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        4
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 36;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day  mud-hidden"
                      aria-label="Monday, 05 February 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        5
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 37;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day  mud-hidden"
                      aria-label="Tuesday, 06 February 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        6
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 38;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day  mud-hidden"
                      aria-label="Wednesday, 07 February 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        7
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 39;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day  mud-hidden"
                      aria-label="Thursday, 08 February 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        8
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 40;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day  mud-hidden"
                      aria-label="Friday, 09 February 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        9
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 41;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day  mud-hidden"
                      aria-label="Saturday, 10 February 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        10
                      </p>
                    </button>
                    <button
                      type="button"
                      // style="--day-id: 42;"
                      className="mud-button-root mud-icon-button mud-ripple mud-ripple-icon mud-picker-calendar-day mud-day  mud-hidden"
                      aria-label="Sunday, 11 February 2024"
                    >
                      <p className="mud-typography mud-typography-body2 mud-inherit-text">
                        11
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
