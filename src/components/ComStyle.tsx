import styled, { css } from 'styled-components';

interface IWhite {
  white?: boolean;
}

export const StyledImg = styled.img`
  opacity: 0.6;
  width: 2.3rem;
  object-fit: contain;
  margin-bottom: 2rem;
  display: inline-block;
  margin-right: 10px;
`;

export const Title = styled.div<IWhite>`
  font-family: BlackHanSans-Regular, sans-serif;
  font-weight: 500;
  cursor: pointer;
  h1 {
    display: inline-block;
    font-size: 3.4rem;
    border-bottom: 2px solid #777;
  }
  ${(props) =>
    props.white &&
    css`
      h1 {
        color: white;
      }
    `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  align-items: center;
`;

export const StyledImages = styled.div`
  img {
    object-fit: contain;
    width: 100%;
    max-height: 470px;
    margin: auto auto;
    position: relative;
  }
`;

export const SlideWrapper = styled.section`
  width: 100%;

  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
  .slick-next {
    right: -20px;
    z-index: 50;
  }
  .slick-prev {
    left: -20px;
    z-index: 50;
  }
`;
