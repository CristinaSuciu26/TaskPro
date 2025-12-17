import { useEffect, useState } from "react";
import {
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
];

export function Loader() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    setFact(FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)]);
  }, []);

  return (
    <LoaderOverlay>
      <FactWrapper>
        <FactText>{fact}</FactText>
      </FactWrapper>
      <LoaderBarWrapper />
    </LoaderOverlay>
  );
}
