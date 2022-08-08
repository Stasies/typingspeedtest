import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  min-width: 424px;
`;
export const Wrapper = styled.div`
  width: 732px;
  background-color: ${({ theme }) => theme.bgLight};
  height: max-content;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  @media screen and (max-width: 740px) {
    width: auto;
    margin: 10px 20px;
  }
`;
export const Input = styled.input`
  z-index: -1;
`;
export const TextSection = styled.div`
  width: calc(100% - 124px);
  padding-right: 20px;
  box-sizing: border-box;
`;
export const Text = styled.p`
  margin: 0;
  line-height: 32px;
`;
export const Letter = styled.span`
  padding: 0.6px;
  user-select: none;
  font-size: 20px;
  &.current {
    background: ${({ theme }) => theme.green};
    color: white;
    border-radius: 3px;
  }
  &.wrong {
    background: ${({ theme }) => theme.error};
    color: white;
    border-radius: 3px;
  }
  &.correct {
    color: ${({ theme }) => theme.green};
  }
`;
export const StatsSection = styled.div`
  width: 124px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 732px) {
    justify-content: start;
    gap: 40px;
  }
`;
export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 12px;
`;
export const StatsType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  font-size: 18px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accentColor};
`;
export const Number = styled.div`
  font-size: 34px;
  margin-right: 12px;
`;
export const StatsResult = styled.div`
  flex: 1;
  margin-left: 20px;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.bg};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
export const Replay = styled.div`
  color: #06d6a0;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 18px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
