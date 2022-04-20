import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import shortid from 'shortid';
import { Image } from 'antd';
import styled from 'styled-components';
import SliderFrame from './SliderFrame';
import * as S from './ComStyle';

interface SliderImagesProps {
  images: { src: string; text: string }[];
}

const SliderImages: React.FunctionComponent<SliderImagesProps> = ({ images }) => {
  return (
    <SliderFrame>
      {images.map((item) => (
        <StyledImages key={shortid.generate()}>
          <Image src={item.src} alt="" />
        </StyledImages>
      ))}
    </SliderFrame>
  );
};

export default SliderImages;

const StyledImages = styled.div`
  align-items: center;
  display: flex !important;
  justify-content: center;
  width: 100%;
  .ant-image {
    margin: 0 auto;
  }
  img {
    object-fit: contain;
    max-height: 470px;
  }
`;
