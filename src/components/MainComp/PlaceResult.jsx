import React, { useEffect, useState } from 'react';
import * as S from './KakaoMap.styled';
import { Link } from 'react-router-dom/dist';
import { FaCaretRight } from 'react-icons/fa';
import { FcShop } from 'react-icons/fc';
import { FaRegCommentDots, FaChevronRight, FaLocationDot } from 'react-icons/fa6';
import { getCoord } from '../../api/map';
import { useQuery } from 'react-query';
import { getComments } from '../../api/comments';

const PlaceResult = ({ places, CATEGORY_NAMES, countCategory, mapCenter }) => {
  const [isFold, setIsFold] = useState(false);

  // 행정구역정보와 카테고리를 이용하여 장소 검색
  const CoordPlaces = useQuery('coord', () => getCoord(mapCenter.x, mapCenter.y, CATEGORY_NAMES[countCategory]));
  useEffect(() => {
    CoordPlaces.refetch();
  }, [mapCenter]);

  // 댓글 및 평점 데이터
  const { data: commentsData } = useQuery('comments', getComments);

  // TOP5:: 행정동 기준 평점 필터링
  let rankComments = [];
  CoordPlaces.data?.places.map((coordItem) => {
    let id = coordItem.id;

    commentsData?.forEach((commentItem) => {
      if (commentItem.shopId !== id) return;

      let isExist = false;
      rankComments.forEach((item) => {
        if (item.shopId !== id) return;

        item.ratingDatas.push(commentItem.rating);
        item.ratingSum += commentItem.rating;
        item.rating = item.ratingSum / item.ratingDatas.length;

        isExist = true;
      });

      if (!isExist) {
        let newObj = {
          shopId: id,
          ratingDatas: [commentItem.rating],
          ratingSum: commentItem.rating,
          rating: commentItem.rating,
          shopDatas: coordItem
        };
        rankComments.push(newObj);
      }
    });
  });
  rankComments.sort((a, b) => {
    if (a.rating > b.rating) return -1;
    if (a.rating < b.rating) return 1;
    return 0;
  });
  rankComments.length = 5;

  return (
    <>
      <S.CoordBox>
        <li>
          <i>
            <FaLocationDot />
          </i>
          {CoordPlaces.data?.coord.region_1depth_name}
        </li>
        <li>
          <i>
            <FaChevronRight />
          </i>
          {CoordPlaces.data?.coord.region_2depth_name}
        </li>
        <li>
          <i>
            <FaChevronRight />
          </i>
          {CoordPlaces.data?.coord.region_3depth_name}
        </li>
      </S.CoordBox>

      <S.PlacesBox className={isFold == true ? 'isFold' : null}>
        <S.PlaceFoldBtn
          title="리스트 작게보기"
          onClick={() => {
            setIsFold(!isFold);
          }}
        >
          <FaCaretRight />
        </S.PlaceFoldBtn>
        <S.PlaceRank>
          <strong>
            {CoordPlaces.data?.coord.region_3depth_name} <br />
            {CATEGORY_NAMES[countCategory]}
            <b>TOP5</b>
            <i>
              <FcShop />
            </i>
          </strong>
          <ol>
            {!rankComments[0] ? (
              <li>평점 정보가 없습니다</li>
            ) : (
              rankComments?.map((place) => {
                return (
                  <li>
                    <Link title={place.shopDatas.place_name} to={`/${place.shopId}`} state={{ test1: place.shopDatas }}>
                      {place.shopDatas.place_name}
                    </Link>
                    <span>
                      <span>
                        {'⭐'.repeat(place.rating)} {place.rating}
                      </span>
                    </span>
                  </li>
                );
              })
            )}
          </ol>
        </S.PlaceRank>
        <S.PlaceList>
          {places.map((place, index) => {
            return (
              <li key={`${index}_${place.id}`}>
                <S.PlaceItemCategory>{place.category_name}</S.PlaceItemCategory>
                <S.PlaceItemTitle>
                  <Link to={`/${place.id}`} state={{ test1: place }}>
                    {place.place_name}
                  </Link>
                </S.PlaceItemTitle>

                {place.road_address_name ? (
                  <S.PlaceItemRoadAddress>{place.road_address_name}</S.PlaceItemRoadAddress>
                ) : null}
                <S.PlaceItemAddress>(지번) {place.address_name}</S.PlaceItemAddress>
                <S.PlaceItemPhone>{place.phone}</S.PlaceItemPhone>
                {commentsData?.filter((item) => item.shopId === place.id).map((item) => item.rating).length ? (
                  <>
                    <S.PlaceItemRating>
                      ⭐
                      {commentsData
                        ?.filter((item) => item.shopId === place.id)
                        .map((item) => item.rating)
                        .reduce((acc, cur) => acc + cur, 0) /
                        commentsData?.filter((item) => item.shopId === place.id).map((item) => item.rating).length}
                    </S.PlaceItemRating>
                    <S.PlaceItemComment>
                      <FaRegCommentDots />
                      <span>
                        {commentsData?.filter((item) => item.shopId === place.id).map((item) => item.rating).length}
                      </span>
                    </S.PlaceItemComment>
                  </>
                ) : null}
              </li>
            );
          })}
        </S.PlaceList>
      </S.PlacesBox>
    </>
  );
};

export default PlaceResult;
