import { useState } from "react";
import css from "./App.module.css";
import type { Votes, VoteType } from "../../types/votes";
import CafeInfo from "../CafeInfo/CafeInfo";

import Notification from "../Notification/Notification";
import VoteStats from "../VoteStats/VoteStats";
import VoteOptions from "../VoteOptions/VoteOptions";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const handleVote = (type: VoteType) => {
    setVotes((prevNotes) => ({ ...prevNotes, [type]: prevNotes[type] + 1 }));
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={css.app}>
      <header> {<CafeInfo />}</header>
      {
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={totalVotes > 0}
        />
      }

      {totalVotes ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
