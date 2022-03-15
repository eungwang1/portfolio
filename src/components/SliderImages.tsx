import React, { Dispatch, SetStateAction } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import SliderFrame from './SliderFrame';
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
  return (
    <SliderFrame>
      {images.map((item, index) => (
        <S.StyledImages key={shortid.generate()}>
          <div>
            <img
              src={item}
              alt=""
              onClick={() => {
                openModal(item);
              }}
            />
          </div>
        </S.StyledImages>
      ))}
    </SliderFrame>
  );
};

export default SliderImages;
