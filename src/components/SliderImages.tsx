import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import SliderFrame from './SliderFrame';
import * as S from './ComStyle';

interface SliderImagesProps {
  images: string[];
}

const SliderImages: React.FunctionComponent<SliderImagesProps> = ({ images }) => {
  return (
    <SliderFrame>
      {images.map((item, index) => (
        <S.StyledImages key={shortid.generate()}>
          <img src={item} alt="" />
        </S.StyledImages>
      ))}
    </SliderFrame>
  );
};

export default SliderImages;
