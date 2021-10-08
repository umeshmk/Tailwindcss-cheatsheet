import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="bg-red-600">Nav</h1>
      <h1>Header</h1>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
