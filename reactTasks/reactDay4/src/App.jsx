import { useState } from "react";
import Usershow from "./components/UserShow";
import "tailwindcss";
import UserShowAxios from "./components/UserShowAxios";
function App() {
  const [userId, setUserId] = useState(1);

  return (
    <>
      <Usershow userId={userId} setUserId={setUserId} />
      <UserShowAxios />
    </>
  );
}

export default App;
