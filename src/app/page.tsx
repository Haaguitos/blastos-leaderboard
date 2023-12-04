"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://blastos-api.vercel.app/leaderboard?amount=50&version=a0.8.0df&platform=pc"
        );
        setLeaderboardData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  const rankingColor = (position: number) => {
    return position === 1 ? "text-primary" : "text-secondary";
  };

  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center gap-10 p-24">
      <h1 className="font-heading text-5xl text-secondary">
        BLAST.OS LEADERBOARD
      </h1>
      <div className="grid grid-cols-5 w-full border-8 border-primary">
        {Array.from({ length: 50 }).map((score, index) => (
          <div className="flex flex-row p-4 gap-2">
            <span className={`${rankingColor(index + 1)}`}>#{index + 1}</span>
            <span>JOOJART</span>
            <span>392529</span>
          </div>
        ))}
      </div>
    </main>
  );
}
