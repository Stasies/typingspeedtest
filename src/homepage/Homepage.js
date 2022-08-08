import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Wrapper,
  TextSection,
  Text,
  Letter,
  StatsSection,
  StatsItem,
  StatsType,
  Number,
  StatsResult,
  Replay,
  Input,
} from "./HomepageElements";
import OpeningMsg from "../components/openingMsg/OpeningMsg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ReplayIcon from "@mui/icons-material/Replay";
const url =
  "https://baconipsum.com/api/?type=meat-and-filler&sentences=5&format=json";

const Homepage = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [correct, setCorrect] = useState();
  const [accuracy, setAccuracy] = useState();
  const [openMsg, setOpenMsg] = useState(true);
  const [speed, setSpeed] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [activeTimer, setActiveTimer] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    let isFetched = false;
    async function fetchData() {
      try {
        const res = await fetch(url);
        const singeText = await res.json();
        if (!isFetched) {
          setText(singeText.join(""));
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    return () => {
      isFetched = true;
    };
  }, []);

  useEffect(() => {
    if (activeTimer) {
      textRef.current.focus();
      const interval = setInterval(() => {
        if (currentIndex !== text.length) {
          setSeconds((prev) => prev + 1);
        } else {
          getResult();
        }
      }, 1000);
      getSpeed();
      return () => {
        clearInterval(interval);
      };
    }
  }, [activeTimer, seconds]);

  const getSpeed = () => {
    setSpeed(Math.floor((currentIndex / seconds) * 60));
  };
  const getResult = () => {
    setOpenMsg(true);
    setShowResult(true);
  };

  useEffect(() => {
    if (mistakes === 0) {
      setAccuracy(100);
    } else {
      setAccuracy((100 - (mistakes / text.length) * 100).toFixed(1));
    }
  }, [mistakes]);

  const typing = (e) => {
    if (text[currentIndex] === e.key) {
      setCorrect(true);
      setCurrentIndex((prev) => prev + 1);
      console.log("correct:", correct);
      console.log("current index:", currentIndex);
    } else if (
      currentIndex === 0 &&
      text[currentIndex] !== e.key &&
      e.key !== "Shift"
    ) {
      setMistakes(1);
      setCorrect(false);
    } else {
      if (correct && e.key !== "Shift") {
        setMistakes((prev) => prev + 1);
        setCorrect(false);
      }
    }
  };

  const startOver = () => {
    window.location.reload();
  };

  return (
    <Container>
      {openMsg && (
        <OpeningMsg
          setOpenMsg={setOpenMsg}
          setActiveTimer={setActiveTimer}
          speed={speed}
          accuracy={accuracy}
          showResult={showResult}
          setShowResult={setShowResult}
        />
      )}
      <Input
        ref={textRef}
        type="text"
        onKeyDown={(e) => typing(e)}
        visibility="hidden"
      />
      <Wrapper>
        <TextSection>
          <Text>
            {text &&
              [...text].map((l, index) => (
                <Letter
                  className={
                    correct === false && index === currentIndex
                      ? "wrong"
                      : index === currentIndex
                      ? "current"
                      : index < currentIndex
                      ? "correct"
                      : ""
                  }
                >
                  {l}
                </Letter>
              ))}
          </Text>
        </TextSection>
        <StatsSection>
          <StatsItem>
            <StatsType>
              <AccessTimeIcon className="icon" />
              скорость
            </StatsType>
            <StatsResult>
              {" "}
              <Number>{speed ? speed : 0}</Number> зн/мин
            </StatsResult>
          </StatsItem>
          <StatsItem>
            <StatsType>
              <TrackChangesIcon className="icon" />
              точность
            </StatsType>
            <StatsResult>
              <Number>{accuracy}%</Number>
            </StatsResult>
          </StatsItem>
          <StatsItem>
            <Replay onClick={startOver}>
              <ReplayIcon className="icon" />
              Заново
            </Replay>
          </StatsItem>
        </StatsSection>
      </Wrapper>
    </Container>
  );
};

export default Homepage;
