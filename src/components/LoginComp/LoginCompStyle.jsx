import styled from 'styled-components';

export const StLoginCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: auto;
`;

export const StLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500px;
  min-height: 700px;
  width: 20%;
  height: 50%;
  border: 5px solid #f25320;
  border-radius: 10%;
  box-shadow: rgb(255, 110, 110) 20px 30px 30px -10px;
  margin: auto;
  gap: 1.5rem;
`

export const StLoginLogo = styled.div`
  margin: 0 0 2rem;
  transform: scale(2);
  font-weight: bold;
`

export const StLoginInput = styled.input`
  width: 15rem;
  height: 1rem;
  font-size: 16px;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  &:focus {
    border-bottom: 2px solid #ff6e6e;
  }
`

export const StLoginBtn = styled.button`
  margin-top: 0.5rem;
  width: 16rem;
  height: 2.5rem;
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

export const StGoRegisterSpan = styled.span`
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