import PropTypes from "prop-types";
import { PureComponent } from "react";

// import { ChildrenType } from "Type/Common";

import "./DarkModeProvider.style";

/**
 * DarkModeProviderComponent
 * Implements Dark Mode - if isDarkModeEnabled is true, inverts all the colors in the app
 *
 * @namespace ScandiDarkTheme/Component/DarkModeProvider/Component/DarkModeProviderComponent */
export class DarkModeProviderComponent extends PureComponent {
  // declare the props that this component expects
  static propTypes = {
    // a required boolean - provided by the ColorInverterContainer
    isDarkModeEnabled: PropTypes.bool.isRequired,
    // a special React prop that receives the children elements
    // children: ChildrenType.isRequired,
  };

  render() {
    const { children, isDarkModeEnabled } = this.props;

    // we render a simple element - the magic happens in CSS
    // we specify a modifier called `isEnabled` in the `mods` prop
    // if isDarkModeEnabled is true, the modifier will be added, otherwise not
    return (
      <div block="DarkModeProvider" mods={{ isEnabled: isDarkModeEnabled }}>
        {children}
      </div>
    );
  }
}

export default DarkModeProviderComponent;
