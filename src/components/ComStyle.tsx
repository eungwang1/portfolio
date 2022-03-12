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
