import "./App.css";

import Home from "./assets/pages/Home";
import MoreReasonToJoin from "./assets/components/MoreReasonToJoin";
import FrequentlyAskedQuestions from "./assets/components/FrequentlyAskedQuestions";
import LoginBar from "./assets/components/LoginBar";

function App() {
  return (
    <>
      <Home />

      <div className="bg-black text-white">
        <div className="p-16">
          <MoreReasonToJoin />
        </div>
        <div className="p-8">
          <FrequentlyAskedQuestions/>
        </div>
        <div className="flex justify-center p-8">
          <LoginBar/>
        </div>
      </div>
    </>
  );
}

export default App;
