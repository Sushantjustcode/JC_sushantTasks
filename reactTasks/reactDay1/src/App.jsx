import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import Greeting from "./components/Greetings";
import ClickingButton from "./components/ClickingButton";

function App() {
  <Greeting />
  let cardNumber = 1;
  return (<>

  // use map on a JSON instead
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <UserCard
        name="Cristiano Ronaldo"
        age={25}
        role="Footballer"
        cardNum={cardNumber++}
      />

      <UserCard
        name="Sushant"
        age={19}
        role="Footballer"
        cardNum={cardNumber++}
      />

      <UserCard
        name="Roberto Carlos"
        age={30}
        role="Footballer"
        cardNum={cardNumber++}
      />

      <UserCard
        name="Neymar Jr"
        age={30}
        role="Footballer"
        cardNum={cardNumber++}
      />

      <UserCard
        name="Salah"
        age={30}
        role="Footballer"
        cardNum={cardNumber++}
      />

      <UserCard
        name="Lionel Messi"
        age={41}
        role="Footballer"
        cardNum={cardNumber++}
      />

      <UserCard
        name="Earling Haaland"
        age={23}
        role="Footballer"
        cardNum={cardNumber++}
      />

      <UserCard
        name="Jude Bellingham"
        age={325}
        role="Footballer"
        cardNum={cardNumber++}
      />

      <UserCard
        name="Kylian Mbappe"
        age={23}
        role="Footballer"
        cardNum={cardNumber++}
      />
    </div>
    <div className="butto flex flex-col justify-center align-middle">
      <ClickingButton />
      </div>

  </>
  );
}
export default App;


