import "./App.css";

import Home from "./assets/pages/Home";
import MoreReasonToJoin from "./assets/components/MoreReasonToJoin";

function App() {
  return (
    <>
      <Home />

      <div className="bg-black text-white">
        <MoreReasonToJoin />
      </div>
    </>
  );
}

export default App;
