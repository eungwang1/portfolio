import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import shortid from 'shortid';
import styled, { css } from 'styled-components';
import SliderFrame from './SliderFrame';
import eyeIcon from '../src_assets/eyeIcon.png';
import large from '../src_assets/large.png';
import * as S from './ComStyle';

interface SliderImagesProps {
  images: string[];
  setCurrentImgIndex: Dispatch<SetStateAction<number>>;
  setModalState: Dispatch<SetStateAction<boolean>>;
  galleryIndex: number;
}

const SliderImages: React.FunctionComponent<SliderImagesProps> = ({
  images,
  setCurrentImgIndex,
  setModalState,
  galleryIndex,
}) => {
  const openModal = (item: string) => {
    setModalState(true);
    setCurrentImgIndex(galleryIndex);
    document.body.style.overflow = 'hidden';
  };
  const dimmedRef = useRef<any>(null);
  const handleHover = () => {
    const { current } = dimmedRef;
    if (current !== null) {
      current.style.opacity = '1';
      current.style.backgroundColor = 'red';
    }
    console.log(current.style);
  };
  const [hoverState, setHoverState] = useState(false);
  return (
    <SliderFrame>
      {images.map((item, index) => (
        <S.StyledImages key={shortid.generate()}>
          <HoverDim
            className="dimmed"
            ref={dimmedRef}
            hoverState={hoverState}
            onMouseOut={() => setHoverState(false)}
          />
          <EyeWrapper
            hoverState={hoverState}
            onMouseOver={() => setHoverState(true)}
            onClick={() => {
              openModal(item);
            }}
          >
            <EyeIcon src={large} alt="" />
          </EyeWrapper>
          <StyledImg
            onMouseOver={() => {
              setHoverState(true);
            }}
            src={item}
            alt=""
            onClick={() => {
              openModal(item);
            }}
          />
        </S.StyledImages>
      ))}
    </SliderFrame>
  );
};

export default SliderImages;

interface IHoverState {
  hoverState: boolean;
}

const StyledImg = styled.img`
  :hover ~ .icon {
    display: block;
    opacity: 0;
  }
  :hover ~ .dimmed {
    opacity: 1;
  }
`;

const HoverDim = styled.div<IHoverState>`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 1;
  z-index: 900;
  position: absolute;
  display: none;

  ${(props) =>
    props.hoverState &&
    css`
      display: block;
      opacity: 0.3;
    `}
`;
const EyeIcon = styled.img`
  width: 30px !important;
  height: 30px;
  z-index: 999;
  margin: auto;
  transition: all 0.1s linear;
  :hover {
    transform: scale(1.2);
  }
`;

const EyeWrapper = styled.div<IHoverState>`
  position: absolute;
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.hoverState &&
    css`
      display: flex;
    `}
`;
