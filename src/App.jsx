import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 text-gray-800">
      <div className="flex gap-8 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="w-20 hover:scale-110 transition-transform"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="w-20 hover:scale-110 transition-transform"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-5xl font-extrabold text-indigo-600 mb-4">
        Vite + React
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 text-center w-80">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors mb-4"
        >
          count is {count}
        </button>
        <p className="text-sm text-gray-600">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> and
          save to test HMR
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-500 italic">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
