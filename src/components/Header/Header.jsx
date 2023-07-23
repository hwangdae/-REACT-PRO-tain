import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Header = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem('token') || null;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      // 임시로 true값으로 설정.
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const logOutFunc = async (event) => {
    event.preventDefault();
    await signOut(auth);
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
    window.location.reload();
  };

  return (
    <S.Header>
      <S.Inner>
        <S.MenuCtn gap="0px">
          <S.MenuSpan
            style={{
              fontFamily: 'Luckiest Guy',
              fontSize: '26px',
              textDecoration: 'none',
              textShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
              color: '#f25320'
            }}
            onClick={() => navigate('/')}
          >
            💪PROtein
          </S.MenuSpan>
        </S.MenuCtn>
        <S.MenuCtn gap="0px">
          {isLoggedIn === true ? (
            <S.MenuSpan onClick={(event) => logOutFunc(event)}>로그아웃</S.MenuSpan>
          ) : (
            <S.MenuSpan onClick={() => navigate('/login')}>로그인</S.MenuSpan>
          )}
          {isLoggedIn === true ? (
            <S.MenuSpan onClick={() => navigate('/mypage')}>프로필위치</S.MenuSpan>
          ) : (
            <S.MenuSpan onClick={() => navigate('/register')}>회원가입</S.MenuSpan>
          )}
        </S.MenuCtn>
      </S.Inner>
    </S.Header>

    <StHeader>
      <StMenuCtn gap="0px">
        <StMenuSpan borderright="3px solid white" onClick={() => navigate('/')}>💪REACT PROtein</StMenuSpan>
      </StMenuCtn>
      <StMenuCtn gap="0px">
        {isLoggedIn === true ? (
          <StMenuSpan onClick={(event) => logOutFunc(event)}>로그아웃</StMenuSpan>
        ) : (
          <StMenuSpan onClick={() => navigate('/login')}>로그인</StMenuSpan>
        )}
        {isLoggedIn === true ? (
          <StMenuSpan borderright="3px solid white" onClick={() => navigate('/mypage')}>
            프로필위치
          </StMenuSpan>
        ) : (
          <StMenuSpan borderright="3px solid white" onClick={() => navigate('/register')}>
            회원가입
          </StMenuSpan>
        )}
      </StMenuCtn>
    </StHeader>
  );
};

export default Header;


const S = {
  Header: styled.header`
    background-color: #fff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    position: fixed;
    z-index: 99;
  `,
  Inner: styled.div`
    max-width: 1400px;
    min-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 30px 0px;
  `,
  MenuCtn: styled.div`

const StHeader = styled.header`
    background-color: #f25320;
    width: 100;
    height: 80px;
    display: flex;
    justify-content: space-between;
    color: white;
    font-weight: bold;
  `;
const StMenuCtn = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${(props) => props.gap};
    margin: 0px 30px;

    gap: 30px;
  `,
  MenuSpan: styled.span`

  `;
const StMenuSpan = styled.span`

    display: flex;
    align-items: center;
    cursor: pointer;
    border-right: ${(props) => (props.borderright ? props.borderright : 'none')};
    height: 100%;
    
  `
