import { Col, Row } from 'antd';
import shortid from 'shortid';
import React from 'react';
import styled from 'styled-components';
import linkImg from '../src_assets/link.png';
import * as C from './ComStyle';
import naverImg from '../src_assets/naver.png';
import tistoryImg from '../src_assets/tistory.png';
import githubWhiteImg from '../src_assets/githubWhite.png';

function Archving() {
  const ArchvingContent = [
    {
      subject: 'GitHub',
      title: '소스코드 저장소 입니다.',
      contents: ['프로젝트 소스코드', '공부를 위해 작성한 소스코드', '이것저것 만들어보며 작성한 소스코드'],
      src: githubWhiteImg,
      linkText: 'https://github.com/eungwang1',
      link: 'https://github.com/eungwang1',
    },
    {
      subject: 'Tistory',
      title: '웹개발 지식들을 기록하는 블로그입니다.',
      contents: ['공부한 것을 복습하기 위한 기록', '코딩을 하면서 참고하기 위한 저장소', '개발 지식을 공유하는 블로그'],
      src: tistoryImg,
      linkText: 'https://gisastudy.tistory.com/',
      link: 'https://gisastudy.tistory.com/category/개발일기',
    },
    {
      subject: 'GitHub',
      title: '현재 운영중인 게더타운 커뮤니티',
      contents: ['게더타운 커뮤니티 카페', '회원수 0명에서 반 년 만에 5000명 달성'],
      src: naverImg,
      linkText: 'https://cafe.naver.com/gathertown',
      link: 'https://cafe.naver.com/gathertown',
    },
  ];

  return (
    <ArchvingWrapper>
      <C.Container>
        <C.Title white>
          <h1>ARCHIVING</h1>
        </C.Title>
        <GridWrapper>
          <Row justify="space-between">
            {ArchvingContent.map((content) => (
              <StyledCol xl={8} md={12} xs={24} key={shortid.generate()}>
                <Container>
                  <ImgTitleWrapper>
                    <StyledImg src={content.src} alt="" />
                    <Title>{content.subject}</Title>
                  </ImgTitleWrapper>
                  <Link href={content.link}>{content.linkText}</Link>
                  <ContentTitle>{content.title}</ContentTitle>
                  <ul>
                    {content.contents.map((el) => (
                      <li key={shortid.generate()}>{el}</li>
                    ))}
                  </ul>
                </Container>
              </StyledCol>
            ))}
          </Row>
        </GridWrapper>
      </C.Container>
    </ArchvingWrapper>
  );
}

export default Archving;

const ArchvingWrapper = styled.div`
  background-color: #222222;
`;

const GridWrapper = styled.div`
  width: 100%;
`;

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin-top: 30px;
  background-color: white;
  width: 80%;
  height: 310px;
  padding: 30px;
  border-radius: 15px;
  ul {
    padding-left: 20px;

    margin-top: 10px;
  }
  li {
    font-weight: 700;
    font-size: rem;
    + li {
      margin-top: 5px;
    }
  }
`;

const ImgTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledImg = styled.img`
  height: 3rem;
  object-fit: contain;
`;
const Title = styled.div`
  font-family: Jomhuria-Regular, sans-serif;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -1px;
  margin-left: 8px;
`;

const Link = styled.a`
  margin-top: 6px;
  font-weight: 600;
  color: #93b0db;
  display: inline-block;
`;

const ContentTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 15px;
`;
