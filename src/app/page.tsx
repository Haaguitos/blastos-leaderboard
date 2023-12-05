import Scoreboard from "@/components/Scoreboard";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 p-24">
      <h1 className="font-heading text-5xl text-white text-neon">
        BLAST.OS LEADERBOARD
      </h1>

      <Scoreboard />
    </main>
  );
}
