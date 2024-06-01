import { createRoot } from "react-dom/client";

//indicates you need to bundle scss file
import "./index.scss";

//main component
const MarvelDBApp = () => {
  return (
    <div className="marvelDB">
      <div>Good morning</div>
    </div>
  );
};
//finds root of app
const container = document.querySelector("#root");
const root = createRoot(container);

//tells React to render app in root DOM element
root.render(<MarvelDBApp />);
