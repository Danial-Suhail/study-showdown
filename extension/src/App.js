/*global chrome*/
import "./App.css";
import { Container } from './components/Container';
import React, { useState, useEffect } from 'react';

function App() {
  const [activeTabUrl, setActiveTabUrl] = useState('No URL captured yet.');
  const [game, setGame] = useState(false);
  const [score, setScore] = useState(0);
  const [recentScore, setRecentScore] = useState(0);
  const [remainingTime, setRemainingTime] = useState(60); // Timer set to 60 seconds (1 minute)
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Retrieve the initial state from Chrome's storage
    chrome.storage.local.get(['activeTabUrl', 'gameActive', 'score', 'recentScore', 'userEmail', 'userName', 'remainingTime'], function (data) {
      if (data.activeTabUrl) {
        setActiveTabUrl(data.activeTabUrl);
      }
      if (data.gameActive !== undefined) {
        setGame(data.gameActive);
      }
      if (data.score !== undefined) {
        setScore(data.score);
      }
      if (data.recentScore !== undefined) {
        setRecentScore(data.recentScore);
      }
      if (data.userEmail) {
        setUserEmail(data.userEmail);
      }
      if (data.userName) {
        setUserName(data.userName);
      }
      if (data.remainingTime !== undefined) {
        setRemainingTime(data.remainingTime);
      }
    });

    // Listen for updates to the remaining time
    chrome.storage.onChanged.addListener((changes) => {
      if (changes.remainingTime) {
        setRemainingTime(changes.remainingTime.newValue);
      }
      if (changes.gameActive) {
        setGame(changes.gameActive.newValue);
      }
      if (changes.score) {
        setScore(changes.score.newValue);
      }
    });
  }, []);

  function handleStart() {
    chrome.runtime.sendMessage({ action: 'startGame' });
  }

  function handleEnd() {
    //put backend information here
    
    chrome.runtime.sendMessage({ action: 'endGame' });
  }

  return (
    <div className="">
      {game ? (
        <Container.Outer>
          <Container.Inner>
            <h2 className="text-black text-center">Welcome to the game!</h2>
            <p className="text-black text-center">Score: {score}</p>
            <p className="text-black text-center">Time Remaining: {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? '0' : ''}{remainingTime % 60}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleEnd}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                End Game
              </button>
            </div>
          </Container.Inner>
        </Container.Outer>
      ) : (
        <Container.Outer>
          <Container.Inner>
            <h2 className="text-black text-center">
              An engaging way to study! Try your best to get the highest score on the leaderboards!
            </h2>
            <p className="text-black text-center">Recent Score: {recentScore}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleStart}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Start Game
              </button>
            </div>
            <p className="text-black text-center">
              Visit the{' '}
              <a
                href="https://studyshowdown.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-800"
              >
                leaderboard
              </a>{' '}
              to see how you rank!
            </p>
          </Container.Inner>
        </Container.Outer>
      )}
    </div>
  );
}

export default App;
