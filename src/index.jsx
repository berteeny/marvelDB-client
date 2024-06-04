import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";

//indicates you need to bundle scss file
import "./index.scss";

//main component
const MarvelDBApp = () => {
  return <MainView />;
};
//finds root of app
const container = document.querySelector("#root");
const root = createRoot(container);

//tells React to render app in root DOM element
root.render(<MarvelDBApp />);
