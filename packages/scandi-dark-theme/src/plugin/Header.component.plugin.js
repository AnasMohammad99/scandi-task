import ModeToggleButton from "../component/ModeToggleButton";

import "./Header.style.plugin";

// plugs into the renderTopMenu function
export const renderTopMenu = (args, callback, instance) => {
  // returns 2 elements after each other
  // first, the original element rendered by renderTopMenu (which we access by calling callback)
  // then, our ModeToggleButton element
  return (
    <>
      {callback(...args)}
      <div block="Header" elem="DarkModeToggle">
        <ModeToggleButton />
      </div>
    </>
  );
};

// export a configuration specifying the namespace we want to plug in to
// as well as the type of plugin
export default {
  "Component/Header/Component": {
    "member-function": {
      renderTopMenu,
    },
  },
};
