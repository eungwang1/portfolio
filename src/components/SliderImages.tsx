import React, { Dispatch, SetStateAction } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import SliderFrame from './SliderFrame';
import * as S from './ComStyle';

interface SliderImagesProps {
  images: string[];
  setCurrentImgUrl: Dispatch<SetStateAction<string>>;
  setModalState: Dispatch<SetStateAction<boolean>>;
}

const SliderImages: React.FunctionComponent<SliderImagesProps> = ({ images, setCurrentImgUrl, setModalState }) => {
  const openModal = (item: string) => {
    setCurrentImgUrl(item);
    setModalState(true);
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
              // onClick={() => {
              //   openModal(item);
              // }}
            />
          </div>
        </S.StyledImages>
      ))}
    </SliderFrame>
  );
};

export default SliderImages;
