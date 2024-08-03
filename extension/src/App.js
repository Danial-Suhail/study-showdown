/*global chrome*/
import "./App.css";
import { Container } from './components/Container';
import React, { useState, useEffect, useRef } from 'react';

let done = false;
function App() {
  
  const [activeTabTitle, setActiveTabTitle] = useState('No title captured yet.');
  const [game, setGame] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Retrieve the active tab title from Chrome's storage on component mount
    chrome.storage.local.get('activeTabTitle', function (data) {
      if (data.activeTabTitle) {
        setActiveTabTitle(data.activeTabTitle);
      }
    });

  }, []);
  
  function handleStart(){
    setGame(true);
    setScore(0);
    done = true
  }

  function handleEnd(){
    setGame(false);
    console.log(score);
  }

  function isStudying(){
    if (activeTabTitle.includes("Khan Academy")) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isStudying) {
        setScore((prevScore) => {
          return prevScore + 10;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {game ? (

        <Container.Outer>
          <Container.Inner>
            <h2>Welcome to the game!</h2>
            <p>This is the content of the next component.</p>

            <div>
              {score}
            </div>

            <button onClick={handleEnd} className="inline-flex items-center rounded-md border border-emerald-300 bg-emerald-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-emerald-50 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              End Game
            </button>
          </Container.Inner>
        </Container.Outer>

      ): (
        
        <Container.Outer>
          <Container.Inner>
            <h2>
                An engaging way to study! Try your best to get the highest score on
                the leaderboards!
            </h2>

            <button onClick={handleStart} className="inline-flex items-center rounded-md border border-emerald-300 bg-emerald-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-emerald-50 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              Start Game
            </button>
            
            <p className="">Visit studyshowdown.com to see the leaderboard!</p>
          </Container.Inner>
        </Container.Outer>

      )}
    </div>
  );
}

export default App;
