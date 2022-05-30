import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons, faFolder } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>
        <FontAwesomeIcon icon={faIcons} /> Note.cloud
      </h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library <FontAwesomeIcon icon={faFolder} />
      </button>
    </nav>
  );
};

export default Nav;
