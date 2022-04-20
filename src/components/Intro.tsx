import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import blockImg from '../src_assets/block01.png';

interface ItroProps {
  setAboutScroll: Dispatch<SetStateAction<boolean>>;
  setSkillsScroll: Dispatch<SetStateAction<boolean>>;
  setArchvingScroll: Dispatch<SetStateAction<boolean>>;
  setProjectScroll: Dispatch<SetStateAction<boolean>>;
}

const Intro: React.FunctionComponent<ItroProps> = ({
  setAboutScroll,
  setSkillsScroll,
  setArchvingScroll,
  setProjectScroll,
}) => {
  return (
    <IntroWrapper
      style={{
        background: `linear-gradient(180deg,rgba(112,93,80,.8) 0,rgba(112,93,80,.8) 90%),url(${blockImg}) 50% no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      <ContentWrapper>
        <Header>
          <div className="title">{`SEG's Portfolio`}</div>
          <div className="menu">
            <div onClick={() => setAboutScroll(true)}>About me</div>
            <div onClick={() => setSkillsScroll(true)}>Skills</div>
            <div onClick={() => setArchvingScroll(true)}>Archiving</div>
            <div onClick={() => setProjectScroll(true)}>Project</div>
          </div>
        </Header>
        <Title>
          - 심은광 - <br /> 프론트엔드 개발자
        </Title>
        <Hr />
        <Content>
          매일매일 성장하는 <br /> 프론트엔드 개발자 심은광입니다. <br /> 끈기있는 성격과 실천력이 저의 장점입니다.
        </Content>
        {/* <div className="moreviewBtn">더 알아보기 ↓</div> */}
      </ContentWrapper>
    </IntroWrapper>
  );
};

export default Intro;

const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  width: 100%;
  .moreviewBtn {
    text-align: center;
    cursor: pointer;
    width: 150px;
    margin: 20px auto;
    padding: 15px 0px;
    border-radius: 30px;
    background-color: #f8b022;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    :hover {
      background-color: orange;
    }
  }
`;

const IntroWrapper = styled.div``;

const Header = styled.div`
  margin-top: 20px;
  color: #cecbc8;
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  .title {
    cursor: pointer;
    margin-right: auto;
    margin-left: 30px;
    font-weight: 700;
    font-size: 1.9rem;
    transition-property: color;
    transition-duration: 0.5s;
    :hover {
      color: white;
    }
  }

  .menu {
    display: flex;
    flex-direction: row;
    font-size: 1.3rem;
    font-weight: 600;
    div {
      transition-property: color;
      transition-duration: 0.5s;
      cursor: pointer;
      :hover {
        color: white;
      }
      + div {
        margin-left: 20px;
      }
    }
  }
`;

const Title = styled.div`
  margin: 0 auto;
  font-family: BlackHanSans-Regular, sans-serif;
  text-align: center;
  font-size: 4.2rem;
  font-weight: 500;
  margin-top: 40px;
  color: white;
`;

const Content = styled.div`
  margin: 0 auto;
  text-align: center;
  color: #d2cdcc;
  line-height: 1.5;
  font-size: 1.1rem;
  font-weight: 510;
  padding-bottom: 30px;
`;

const Hr = styled.div`
  content: '';
  border-bottom: 4px solid orange;
  border-radius: 5px;
  width: 50px;
  margin: 20px auto;
`;
