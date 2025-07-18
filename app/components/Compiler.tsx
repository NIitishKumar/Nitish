"use client"
import { useState } from "react";
import axios from "axios";

interface Language {
  id: number;
  name: string;
}

const languages: Language[] = [
  { id: 71, name: "Python" },
  { id: 54, name: "C++" },
  { id: 62, name: "Java" },
  { id: 63, name: "JavaScript" },
];

function App() {
  const [code, setCode] = useState<string>("// Write your code here");
  const [language, setLanguage] = useState<number>(71);
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleRun = async () => {
    setLoading(true);
    setOutput("");

    try {
      const res = await axios.post<{ output: string }>(
        "http://localhost:5000/run",
        {
          code,
          language_id: language,
          stdin: input,
        }
      );
      setOutput(res.data.output);
    } catch (err) {
      setOutput("❌ Error running code.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Online Code Compilerfdsfasdfas
        </h1>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label className="text-sm font-medium text-gray-700">
            Choose Language:
          </label>
          <select
            className="w-full md:w-60 px-3 py-2 border rounded-md bg-white text-gray-700 shadow-sm"
            value={language}
            onChange={(e) => setLanguage(Number(e.target.value))}
          >
            {languages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Source Code:
          </label>
          <textarea
            className="w-full h-64 p-3 font-mono text-sm border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Input (Optional):
          </label>
          <textarea
            className="w-full h-24 p-3 font-mono text-sm border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button
          onClick={handleRun}
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
        >
          {loading ? "Running..." : "Run Code"}
        </button>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Output:
          </label>
          <pre className="w-full bg-black text-green-300 rounded-md p-4 overflow-x-auto whitespace-pre-wrap min-h-[100px]">
            {output || "No output yet..."}
          </pre>
        </div>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          <p className="w-full h-64 p-3 font-mono text-sm border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            fdsjfnajsh
          </p>
        </label>
        {code.split("\n").map((line, index) => {
          const isComment = line.trim().startsWith("//"); // Check if the line starts with '//'

          return (
            <p key={index} className={isComment ? "comment-line" : ""}>
              {line}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
