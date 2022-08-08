import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
`;
export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgLight};
  width: 668px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border-radius: 8px;
`;
export const Text = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.textSoft};
  font-weight: 500;
  margin-bottom: 40px;
  text-align: center;
`;
export const Result = styled.p`
  font-size: 24px;
  margin: 0;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.textSoft};
  .results {
    color: ${({ theme }) => theme.bg};
    font-weight: 500;
  }
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.bg};
  border: none;
  color: white;
  border-radius: 3px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  &:focus,
  &:hover {
    opacity: 0.8;
  }

  &:active {
    background: ${({ theme }) => theme.accentColor};
  }
`;
