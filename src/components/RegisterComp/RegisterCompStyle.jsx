import styled from 'styled-components';

export const StRegisterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: auto;
`;

export const StRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500px;
  min-height: 700px;
  width: 20%;
  height: 50%;
  border: 5px solid #ff6e6e;
  border-radius: 10%;
  box-shadow: rgb(255, 110, 110) 20px 30px 30px -10px;
  margin: auto;
  gap: 1.5rem;

  .eyeIcon {
    font-size: 1.5rem;
  }
`;

export const StPwBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StRegisterInputBox = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StRegisterInput = styled.input`
  width: 15rem;
  height: 1rem;
  font-size: 16px;
  padding: 0.5rem;
  min-width: 20rem;
  margin: 5px 0;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  transition-duration: 0.2s;
  &:focus {
    border-bottom: 2px solid #ff6e6e;;
  }
`;

export const StRegisterBtn = styled.button`
  margin-top: 0.5rem;
  height: 2.5rem;
  width: 23rem;
  font-size: 20px;
  background-color: white;
  color: #ff6e6e;
  font-weight: bold;
  border: 1px solid #ff6e6e;
  cursor: pointer;
  &:hover {
    transition-duration: 0.5s;
    background-color: #ff6e6e;
    color: white;
    font-weight: bold;
  }
`;

export const StRegisterMsg = styled.p`
  font-size: 13px;
  color: #ff6e6e;
  min-height: 1rem;
  height: 1rem;
  min-width: 20rem;
  width: 22rem;
  white-space: pre-wrap;
`;

export const StGoLoginSpan = styled.span`
  margin-top: 3rem;
  text-align: center;
  width: 20rem;
  height: 2rem;
  cursor: pointer;
  &:hover {
    transition-duration: 0.2s;
    color: #ff6e6e;
    text-decoration: underline;
    font-weight: bold;
  }
`;