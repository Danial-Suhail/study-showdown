/*global chrome*/
import "./App.css";
import { Container } from './components/Container';
import React, { useState, useEffect } from 'react';

function App() {
  const [activeTabUrl, setActiveTabUrl] = useState('No URL captured yet.');
  const [game, setGame] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Retrieve the active tab URL and game state from Chrome's storage on component mount
    chrome.storage.local.get(['activeTabUrl', 'gameActive', 'score'], function (data) {
      if (data.activeTabUrl) {
        setActiveTabUrl(data.activeTabUrl);
      }
      if (data.gameActive !== undefined) {
        setGame(data.gameActive);
      }
      if (data.score !== undefined) {
        setScore(data.score);
      }
    });
  }, []);

  function handleStart() {
    setGame(true);
    setScore(0);
    chrome.storage.local.set({ gameActive: true, score: 0 });

    // Set a timer for 10 minutes (600 seconds)
    chrome.alarms.create('endGameTimer', { delayInMinutes: 10 });
  }

  function handleEnd() {
    setGame(false);
    console.log('Final score:', score);
    chrome.storage.local.set({ gameActive: false });
    chrome.alarms.clear('endGameTimer');
  }

  return (
    <div>
      {game ? (
        <Container.Outer>
          <Container.Inner>
            <h2>Welcome to the game!</h2>
            <p>Score: {score}</p>
            <button onClick={handleEnd} className="inline-flex items-center rounded-md border border-emerald-300 bg-emerald-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-emerald-50 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              End Game
            </button>
          </Container.Inner>
        </Container.Outer>
      ) : (
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
