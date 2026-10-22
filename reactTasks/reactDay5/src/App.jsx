import { useRef, useState, useEffect, createContext, useContext } from "react";


const ThemeContext = createContext();

function App() {
  const headingRef = useRef(null);
  const inputRef = useRef(null);
  const boxRef = useRef(null);
  const bottomRef = useRef(null);
  const countRef = useRef(0);
  const timerRef = useRef(null);
  const renderCountRef = useRef(0);

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [color, setColor] = useState("black");

  // useContext state
  const [theme, setTheme] = useState("light");

  const previousName = useRef("");

  renderCountRef.current++;

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  function changeHeadingColor() {
    headingRef.current.style.color = "red";
  }

  function changeHeadingColorBack() {
    headingRef.current.style.color = "black";
  }

  function focusInput() {
    inputRef.current.focus();
  }

  function increaseRef() {
    countRef.current++;
    console.log("Ref count:", countRef.current);
  }

  function increaseState() {
    setCount((prev) => prev + 1);
  }

  function startTimer() {
    if (timerRef.current !== null) {
      return;
    }

    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function scrollToBottom() {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function getBoxSize() {
    const width = boxRef.current.offsetWidth;
    const height = boxRef.current.offsetHeight;

    console.log("Width:", width);
    console.log("Height:", height);
  }

  function changeBoxColor() {
    boxRef.current.style.backgroundColor = "tomato";
  }

  function changeBoxColorBack() {
    boxRef.current.style.backgroundColor = "lightblue";
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "#222",
          color: theme === "light" ? "black" : "white",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <h1>useRef + useContext Examples</h1>
        <p className="pTest no-underline hover:underline"> sdsdpp </p>
        <hr />

        <h2 ref={headingRef}>DOM Reference</h2>

        <button onClick={changeHeadingColor}>Change Heading Color</button>

        <button onClick={changeHeadingColorBack}>Reset Heading Color</button>

        <hr />

        <h2>Input Reference</h2>

        <input ref={inputRef} placeholder="Click the button" />

        <button onClick={focusInput}>Focus Input</button>

        <hr />

        <h2>useRef Value</h2>

        <p>Open the console and click the button.</p>

        <button onClick={increaseRef}>Increase Ref</button>

        <hr />

        <h2>useState vs useRef</h2>

        <p>State: {count}</p>

        <button onClick={increaseState}>Increase State</button>

        <button onClick={increaseRef}>Increase Ref</button>

        <hr />

        <h2>Previous Value</h2>

        <p>Current: {name}</p>

        <p>Previous: {previousName.current}</p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <hr />

        <h2>Timer with useRef</h2>

        <h3>{count}</h3>

        <button onClick={startTimer}>Start</button>

        <button onClick={stopTimer}>Stop</button>

        <hr />

        <h2>Scroll to Element</h2>

        <button onClick={scrollToBottom}>Scroll to Bottom</button>

        <div style={{ height: "500px" }} />

        <h2 ref={bottomRef}>You reached the bottom</h2>

        <hr />

        <h2>Measure DOM Element</h2>

        <div
          ref={boxRef}
          style={{
            width: "300px",
            height: "150px",
            backgroundColor: "lightblue",
            padding: "20px",
            color: "black",
          }}
        >
          Box
        </div>

        <button onClick={getBoxSize}>Get Box Size</button>

        <button onClick={changeBoxColor}>Change Box Color</button>

        <button onClick={changeBoxColorBack}>Reset Box Color</button>

        <hr />

        <h2>Store Data Without Re-render</h2>

        <p>Render count: {renderCountRef.current}</p>

        <button
          onClick={() => {
            renderCountRef.current++;
            console.log("Render count ref:", renderCountRef.current);
          }}
        >
          Change Ref
        </button>

        <hr />

        <h2>State Controlled Color</h2>

        <p style={{ color }}>This color is controlled by state.</p>

        <button onClick={() => setColor("red")}>Red</button>

        <button onClick={() => setColor("blue")}>Blue</button>

        <button onClick={() => setColor("green")}>Green</button>

        <hr />
        <h2>useContext Example</h2>

        <ThemeComponent />
      </div>
    </ThemeContext.Provider>
  );
}


function ThemeComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>
        Current Theme: <strong>{theme}</strong>
      </p>

      <button onClick={() => setTheme("light")}>Light Mode</button>

      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
}

export default App;
