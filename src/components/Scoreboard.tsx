"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface LeaderboardData {
  name: string;
  score: string;
}

export default function Scoreboard() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://blastos-api.vercel.app/leaderboard",
          {
            params: {
              amount: 50,
              version: "a0.8.0df",
              platform: "pc",
            },
          }
        );

        setLeaderboardData(response.data.response);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const rankingColor = (position: number) => {
    return position === 1 ? "text-primary" : "text-secondary";
  };

  return (
    <>
      {loading ? (
        <p>LOADING...</p>
      ) : (
        <div className="grid grid-cols-2 justify-center justify-items-center w-full border-8 border-primary rounded-2xl shadow-neon 2xl:grid-cols-5">
          {leaderboardData.map((player, index) => (
            <div
              key={index}
              className={`flex flex-row p-4 gap-2 2xl:text-base ${
                index < 2 && `col-start-1 col-end-3 text-4xl 2xl:col-auto`
              } ${index === 1 && `text-2xl`}`}
            >
              <span className={`${rankingColor(index + 1)}`}>#{index + 1}</span>
              <span>{player.name}</span>
              <span className="text-tertiary">{player.score}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
