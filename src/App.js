import raw from "./tabs/master_of_puppets.txt";
import { useEffect, useState } from "react";
import Navigator from "./components/Navigator";
import Footer from "./components/Footer";

function App() {
  const [tab, setTab] = useState("");
  useEffect(() => {
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        setTab(text);
      });
  }, []);
  return (
    <div>
      <Navigator />
      <pre>{tab}</pre>
      <Footer />
    </div>
  );
}

export default App;
