import { connect } from "react-redux";

import ColorInverter from "./ColorInverter.component";

// given a state object (representing the current state in the Redux store),
// returns an object of props that should be passed to ColorInverter
/** @namespace ScandiDarkTheme/Component/ColorInverter/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
  // isDarkModeEnabled: state.DarkModeReducer.enabled,
  isDarkModeEnabled: true,
});

// this component does not need to dispatch any actions, so we return an empty object {}
/** @namespace ScandiDarkTheme/Component/ColorInverter/Container/mapDispatchToProps */
export const mapDispatchToProps = (_dispatch) => ({});

// connect is a Redux HOC that uses the two functions we defined above
// to pass their return values as props to ColorInverter
export default connect(mapStateToProps, mapDispatchToProps)(ColorInverter);
