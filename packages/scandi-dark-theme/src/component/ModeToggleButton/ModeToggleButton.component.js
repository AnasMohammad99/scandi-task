import PropTypes from "prop-types";
import { PureComponent } from "react";

import "./ModeToggleButton.style";

/**
 * A button that enables/disables dark mode
 *
 * @namespace ScandiDarkTheme/Component/ModeToggleButton/Component/ModeToggleButtonComponent
 */
export class ModeToggleButtonComponent extends PureComponent {
  static propTypes = {
    // a boolean that is true if dark mode is currently enabled
    isDarkModeEnabled: PropTypes.bool.isRequired,
    // a function for dispatching an update to the dark mode status
    enableDarkMode: PropTypes.func.isRequired,
  };

  render() {
    const { isDarkModeEnabled, enableDarkMode } = this.props;

    // render a simple button that toggles dark mode
    // note: __() is a magic function in Scandi.
    // it is necessary for the text to be translated in other languages
    return (
      <button
        block="ModeToggleButton"
        mods={{ isEnabled: isDarkModeEnabled }}
        aria-label={__("Toggle Dark Mode")}
        onClick={() => enableDarkMode(!isDarkModeEnabled)}
      >
        {__("Toggle Dark Mode")}
      </button>
    );
  }
}

export default ModeToggleButtonComponent;
