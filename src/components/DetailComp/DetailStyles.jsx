import { css, styled } from 'styled-components';

export const StDetailPage = styled.div`
  margin: 0px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const StDetailInner = styled.div`
  max-width: 1000px;
  min-width: 1000px;
  margin: 120px auto 0px auto;
`;
export const StDetailInfoWrap = styled.div`
  background-color: #fff;
  border: solid 1px #e6e6e6;
  margin-bottom: 30px;
`;
export const StDetailBackImg = styled.div`
  min-height: 120px;
  background-color: #111;
`;
export const StDetailInfo = styled.div`
  text-align: center;
  position: relative;
  top: -40px;
  width: 730px;
  margin: 0 auto;
  padding: 40px 0px;
  background-color: #fff;
  z-index: 1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StDetailBox = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: #fff;
  margin-bottom: 20px;
  padding-bottom: 30px;
`;
export const StDetailBoxInner = styled.div`
  width: 600px;
  margin: 0 auto;
  > h1 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  > p {
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-bottom: 5px;
  }
`;
export const StReviewCountBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
`;

export const StDetailBoxReview = styled.div`
  background-color: #fff;
  border: solid 1px #e6e6e6;
`;
export const StDetailBoxReviewInner = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 40px 30px 30px 30px;
  > h1 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  > div > h2 {
    font-size: 16px;
    font-weight: bold;
  }
`;
export const StarButton = styled.button`
  font-size: 20px;
  color: ${(props) => (props.active ? 'gold' : 'gray')};
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0px 1px !important;
`;

export const StDropdownCtn = styled.div`
  margin-top: 15px;
`;
export const StDropdownCtnInner = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: #fff;
  margin: 10px 0px;
  > input {
    width: 230px;
    padding-left: 10px;
  }
`;

export const StDropdown = styled.div`
  user-select: none;
  width: 360px;

  position: relative;
`;

export const StDropdownBtn = styled.div`
  cursor: pointer;
  padding: 15px 15px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StDropdownContent = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  padding: 10px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 7px;
  width: 94%;
  z-index: 1;
`;

export const StDropdownItem = styled.div`
  cursor: pointer;
  padding: 10px;
  transition: all 0.2s;
  background-color: #fff;
  &:hover {
    background-color: #f4f4f4;
  }
`;
export const CommentWrap = styled.div`
  overflow: hidden;
  > h2 {
    margin: 10px 0px;
  }
  > button {
    padding: 10px 36px;
    background: #f25320;
    border-radius: 4px;
    color: white;
    border: none;
    float: right;
  }
`;
export const CommentInput = styled.textarea`
  background: transparent;
  border: 1px solid black;
  border-radius: 2px;
  margin-bottom: 10px;
  max-width: 586px;
  min-width: 588px;
  padding: 10px 0px 100px 10px;
  color: black;
`;

export const StDetailUserReview = styled.div`
  background: #fff;
  margin: 30px 0px;
  padding: 30px;
  border: solid 1px #e6e6e6;
`;
export const StDetailUserReviewInner = styled.div`
  width: 600px;
  margin: 0 auto;
  >h1{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    padding-bottom: 20px;
    border-bottom: solid 1px #ddd;
  }
  `
export const StCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  position: relative;
  padding: 16px 0px;
`;

export const StCommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const StCommentContent = styled.div`
  margin-bottom: 10px;
`;

export const StCommentButtons = styled.div`
  background: #eee;
  font-size: 14px;
  padding: 6px 14px;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background: #333;
    color: #fff;
  }
`;

export const StBtnWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const StCommentDetails = styled.div`
  display: flex;
  align-items: center;
`;
