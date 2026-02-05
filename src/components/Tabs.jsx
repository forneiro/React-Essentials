import { EXAMPLES } from "../data";
import { useState } from "react";

export default function Tabs() {
  // Set the initial example value
  const [example, setExample] = useState("");

  // Set the content to display
  const content =
    example === "" ? (
      <p>Please select a topic.</p>
    ) : (
      <div id="tab-content">
        <h3>{EXAMPLES[example].title}</h3>
        <p>{EXAMPLES[example].description}</p>
        <code>{EXAMPLES[example].code}</code>
      </div>
    );

  // Handle the example value
  const handleExample = function (identifier) {
    setExample(identifier);
  };

  return (
    <div id="examples">
      <h2>Examples</h2>
      <menu>
        <button
          className={example === "components" ? "active" : ""}
          onClick={() => handleExample("components")}
        >
          Components
        </button>
        <button
          className={example === "jsx" ? "active" : ""}
          onClick={() => handleExample("jsx")}
        >
          JSX
        </button>
        <button
          className={example === "props" ? "active" : ""}
          onClick={() => handleExample("props")}
        >
          Props
        </button>
        <button
          className={example === "state" ? "active" : ""}
          onClick={() => handleExample("state")}
        >
          State
        </button>
      </menu>

      {content}
    </div>
  );
}
