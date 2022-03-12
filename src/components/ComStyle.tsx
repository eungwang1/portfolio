import styled from 'styled-components';

export const StyledImg = styled.img`
  opacity: 0.6;
  width: 2.3rem;
  object-fit: contain;
  margin-bottom: 2rem;
  display: inline-block;
  margin-right: 10px;
`;

export const Title = styled.div`
  font-family: BlackHanSans-Regular, sans-serif;
  font-weight: 500;
  h1 {
    display: inline-block;
    font-size: 3.4rem;
    border-bottom: 2px solid #777;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  width: 100%;
  margin: 30px auto;
  align-items: center;
`;
