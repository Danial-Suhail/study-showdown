/*global chrome*/
import "./App.css";
import { Container } from "./components/Container";
import React, { useState, useEffect } from "react";

function App() {
  const [activeTabUrl, setActiveTabUrl] = useState("No URL captured yet.");
  const [game, setGame] = useState(false);
  const [score, setScore] = useState(0);
  const [recentScore, setRecentScore] = useState(0);
  const [remainingTime, setRemainingTime] = useState(60); // Timer set to 600 seconds (10 minutes)

  useEffect(() => {
    // Retrieve the active tab URL, game state, and recent score from Chrome's storage on component mount
    chrome.storage.local.get(
      ["activeTabUrl", "gameActive", "score", "recentScore"],
      function (data) {
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
      }
    );
    // Retrieve the active tab URL, game state, score, and recent score from Chrome's storage on component mount
    chrome.storage.local.get(
      ["activeTabUrl", "gameActive", "score", "recentScore"],
      function (data) {
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
      }
    );
  }, []);

  useEffect(() => {
    let timer;
    if (game) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            handleEnd();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [game]);

  function handleStart() {
    setGame(true);
    setScore(0);
    setRemainingTime(600); // Reset timer to 10 minutes
    chrome.storage.local.set({ gameActive: true, score: 0 });

    // Set a timer for 10 minutes (600 seconds)
    chrome.alarms.create("endGameTimer", { delayInMinutes: 1 });
  }

  function handleEnd() {
    setGame(false);
    console.log("Final score:", score);
    chrome.storage.local.set({ gameActive: false, recentScore: score });
    chrome.alarms.clear("endGameTimer");
  }

  return (
    <div className="">
      {game ? (
        <Container.Outer>
          <Container.Inner>
            <h2 className="text-black text-center">Welcome to the game!</h2>
            <p className="text-black text-center">Score: {score}</p>
            <p className="text-black text-center">
              Time Remaining: {Math.floor(remainingTime / 60)}:
              {remainingTime % 60 < 10 ? "0" : ""}
              {remainingTime % 60}
            </p>
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
              An engaging way to study! Try your best to get the highest score
              on the leaderboards!
            </h2>
            <p className="text-black text-center">
              Recent Score: {recentScore}
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleStart}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Start Game
              </button>
            </div>
            <p className="text-black text-center">
              Visit the{" "}
              <a
                href="https://studyshowdown.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-800"
              >
                leaderboard
              </a>{" "}
              to see how you rank!
            </p>
          </Container.Inner>
        </Container.Outer>
      )}
    </div>
  );
}

export default App;
