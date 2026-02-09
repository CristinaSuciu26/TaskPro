import { useEffect, useState } from "react";
import {
  Fact,
  FactText,
  FactWrapper,
  LoaderBarWrapper,
  LoaderOverlay,
} from "./Loader.styled";

const FUN_FACTS = [
  "Tasks that are written down are 42% more likely to be completed.",
  "Your brain releases dopamine when you check off a task.",
  "Multitasking can reduce productivity by up to 40%.",
  "A 5-minute break can boost your focus by 20%.",
  "The most efficient workflow has no more than 3 tasks ‘In Progress’.",
  "A large task gets done 30% faster if you break it into subtasks.",
  "Daily standups reduce delays by 24%.",
  "Teams that communicate frequently complete projects 50% faster.",
  "A clear message saves an average of 4 minutes of follow-up.",
  "Breaking a large task into smaller steps reduces overwhelm by 30%.",
  "Planning your tasks in advance can save up to 1 hour per day.",
];

export function Loader() {
  const initialIndex = Math.floor(Math.random() * FUN_FACTS.length);
  const [currentFact, setCurrentFact] = useState(FUN_FACTS[initialIndex]);

  const [, setRemainingFact] = useState(
    FUN_FACTS.filter((_, i) => i !== initialIndex),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingFact((prev) => {
        if (prev.length === 0) {
          return FUN_FACTS.filter((_, f) => f !== currentFact);
        }

        const randomFact = Math.floor(Math.random() * prev.length);
        const nextFact = prev[randomFact];

        setCurrentFact(nextFact);

        return prev.filter((_, i) => i !== randomFact);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [currentFact]);

  return (
    <LoaderOverlay>
      <LoaderBarWrapper />
      <FactWrapper>
        <Fact>Did you know?</Fact>
        <FactText>{currentFact}</FactText>
      </FactWrapper>
    </LoaderOverlay>
  );
}
