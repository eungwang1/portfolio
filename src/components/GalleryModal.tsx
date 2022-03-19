import React, { Dispatch, SetStateAction } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import shortid from 'shortid';
import SliderFrame from './SliderFrame';

interface galleryModalProps {
  setModalState: Dispatch<SetStateAction<boolean>>;
  projects: {
    ProjectName: string;
    date: string;
    images: { src: string; text: string }[];
    explain: JSX.Element;
    summary: (
      | {
          title: string;
          content: string;
        }
      | {
          title: string;
          content: JSX.Element;
        }
    )[];
  }[];
  currentImgIndex: number;
}

const GalleryModal: React.FunctionComponent<galleryModalProps> = ({ setModalState, projects, currentImgIndex }) => {
  const closeModal = () => {
    setModalState(false);
    document.body.style.overflow = 'unset';
  };
  return (
    <ModalWrapper>
      <Dim onClick={closeModal} />
      <Modal>
        <SliderFrame>
          {projects[currentImgIndex].images.map((item, index) => (
            <div key={shortid.generate()}>
              <Text>
                <span>{item.text}</span>
                <StyledBtn onClick={closeModal}>x</StyledBtn>
              </Text>
              <StyledImages key={shortid.generate()}>
                <img src={item.src} alt="" />
              </StyledImages>
            </div>
          ))}
        </SliderFrame>
      </Modal>
    </ModalWrapper>
  );
};

export default GalleryModal;

const StyledBtn = styled(Button)`
  margin-left: auto;
  z-index: 999;
`;
const Text = styled.div`
  border-bottom: 2px double #686868;
  padding: 10px 10px 5px 10px;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  color: black;
`;

const Dim = styled.div`
  z-index: 500;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.2;
`;

const ModalWrapper = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 300;
`;
const Modal = styled.div`
  width: 80vw;
  height: 70vw;
  background-color: white;
  position: fixed;
  z-index: 900;
  padding: 0 20px 0px 20px;
  max-width: 960px;
  max-height: 850px;
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
  .slick-next {
    right: -20px;
    z-index: 999;
  }
  .slick-prev {
    left: -20px;
    z-index: 999;
  }
`;

const StyledImages = styled.div`
  margin: 0 auto;
  img {
    object-fit: contain;
    width: 100%;
    max-width: 920px;
    max-height: 728px;
  }
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;
