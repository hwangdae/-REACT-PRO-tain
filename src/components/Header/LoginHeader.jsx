import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

function LoginHeader() {
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
          {/* <S.MenuCtn gap="0px">
          </S.MenuCtn> */}
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
    );
  };

export default LoginHeader

const S = {
    Header: styled.header`
      background-color: #fff;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
      width: 100%;
      z-index: 99;
      display: flex;
      justify-content: center;
      gap: 100px;
      margin-bottom: 10px;
    `,
    Inner: styled.div`
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding: 20px 0px;
    `,
    MenuCtn: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: ${(props) => props.gap};
      margin: 0px 30px;
      gap: 60px;
    `,
    MenuSpan: styled.span`
      display: flex;
      align-items: center;
      cursor: pointer;
      border-right: ${(props) => (props.borderright ? props.borderright : 'none')};
      height: 100%;
    `
  };