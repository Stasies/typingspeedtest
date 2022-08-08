import { Container, Wrapper, Text, Result, Button } from "./OpeningMsgElements";

const OpeningMsg = ({
  setOpenMsg,
  setActiveTimer,
  speed,
  accuracy,
  showResult,
  setShowResult,
}) => {
  const startTyping = () => {
    setOpenMsg(false);
    setActiveTimer(true);
    setShowResult(false);
  };

  return (
    <Container>
      <Wrapper>
        {!showResult ? (
          <Text>Приготовься печатать</Text>
        ) : (
          <>
            <Text>
              {speed < 100 ? "Продолжайте тренироваться!" : "Поздравляем!"}
            </Text>
            <Result>
              Вы печатаете со скоростью{" "}
              <span className="results">{speed} зн/мин</span> и точностью{" "}
              <span className="results">{accuracy}%</span>
            </Result>
          </>
        )}

        {!showResult ? (
          <Button onClick={startTyping}>Начать печатать</Button>
        ) : (
          <Button onClick={() => window.location.reload()}>
            Попробовать еще раз
          </Button>
        )}
      </Wrapper>
    </Container>
  );
};

export default OpeningMsg;
