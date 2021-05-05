import "./App.css";
import { useState, useEffect } from "react";
import Editor from "./components/Editor";

function App() {
  const [htmlValue, setHtmlValue] = useState("<h1>This is a header tag</h1>");

  const [cssValue, setCssValue] = useState("h1{\n\tcolor:blue\n}");

  const [jsValue, setJsValue] = useState(
    "console.log('Oh , so you can run Javascript too')"
  );

  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    setSrcDoc(
      `<html>
            <body>${htmlValue}</body>
            <style>${cssValue}</style>
            <script>${jsValue}</script>
        </html>`
    );
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html>
            <body>${htmlValue}</body>
            <style>${cssValue}</style>
            <script>${jsValue}</script>
        </html>`
      );
    }, 500);

    return () => clearTimeout(timeout);
    // return timeout;
  }, [htmlValue, cssValue, jsValue]);
  return (
    <>
      <div className="pane top-pane">
        <Editor
          mode="xml"
          display="HTML"
          textValue={htmlValue}
          onChange={setHtmlValue}
          className="code-editor-textarea"
        />
        <Editor
          mode="css"
          display="CSS"
          textValue={cssValue}
          onChange={setCssValue}
          className="code-editor-textarea"
        />
        <Editor
          mode="javascript"
          display="JS"
          textValue={jsValue}
          onChange={setJsValue}
          className="code-editor-textarea"
        />
      </div>
      <div className="bottom-pane">
        <iframe
          srcDoc={srcDoc}
          title="Ouput"
          width="100%"
          height="100%"
          sandbox="allow-scripts allow-modals allow-forms"
        ></iframe>
      </div>
    </>
  );
}

export default App;
