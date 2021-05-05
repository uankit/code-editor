import React, { useEffect } from "react";
import { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

require("codemirror/mode/xml/xml");
require("codemirror/mode/css/css");
require("codemirror/mode/javascript/javascript");

export default function Editor({ mode, display, textValue, onChange }) {
  function handleChange(editor, data, value) {
    onChange(value);
  }
  const [collapse, setCollapse] = useState(false);

  const handleClick = () => {
    setCollapse((prevCollapse) => !prevCollapse);
  };
  return (
    <div className={`code-editor ${collapse === false ? "" : "collapse"}`}>
      <div className="code-editor-name">
        <h5 className="editor-text">{display}</h5>
        <button className="btn" onClick={handleClick}>
          <FontAwesomeIcon icon={collapse ? faExpandAlt : faCompressAlt} />
        </button>
      </div>
      <CodeMirror
        options={{
          mode: mode,
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
        }}
        onBeforeChange={handleChange}
        value={textValue}
      />
    </div>
  );
}
