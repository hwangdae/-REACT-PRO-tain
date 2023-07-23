import React from 'react';
import { VscTriangleDown } from 'react-icons/vsc';
import {
  StarButton,
  StDropdownCtn,
  StDropdown,
  StDropdownBtn,
  StDropdownContent,
  StDropdownItem,
  CommentInput,
  StPriceInput,
  StAddBtn
} from './DetailStyles';

const DetailInput = ({
  rating,
  handleRatingSelection,
  selected,
  showDropdown,
  isActive,
  options,
  setSelected,
  setIsActive,
  price,
  handleChange,
  comment,
  commentHandler,
  addCommentHandler
}) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StarButton active={rating >= 1} onClick={() => handleRatingSelection(1)}>
          ★
        </StarButton>
        <StarButton active={rating >= 2} onClick={() => handleRatingSelection(2)}>
          ★
        </StarButton>
        <StarButton active={rating >= 3} onClick={() => handleRatingSelection(3)}>
          ★
        </StarButton>
        <StarButton active={rating >= 4} onClick={() => handleRatingSelection(4)}>
          ★
        </StarButton>
        <StarButton active={rating >= 5} onClick={() => handleRatingSelection(5)}>
          ★
        </StarButton>
      </div>
      <StDropdownCtn>
        <StDropdown>
          <StDropdownBtn onClick={showDropdown}>
            {selected || '가격정보를 입력해주세요!!'}
            <VscTriangleDown />
            {isActive && (
              <StDropdownContent>
                {options.map((option) => (
                  <StDropdownItem
                    key={option}
                    onClick={() => {
                      setSelected(option);
                      setIsActive(false);
                    }}
                  >
                    {option}
                  </StDropdownItem>
                ))}
              </StDropdownContent>
            )}
          </StDropdownBtn>
        </StDropdown>
        <StPriceInput type="text" value={price} onChange={handleChange} placeholder="ex) ₩ 3,00,000 " />
      </StDropdownCtn>

      <CommentInput type="text" value={comment} onChange={commentHandler} placeholder="내용을 입력하세요." />
      <br />
      <StAddBtn onClick={addCommentHandler}>등록</StAddBtn>
    </div>
  );
};

export default DetailInput;
