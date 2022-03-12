import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import callImg from '../src_assets/call.png';
import calenderImg from '../src_assets/calender.png';
import emailImg from '../src_assets/email.png';
import mapImg from '../src_assets/map.png';
import pencilImg from '../src_assets/pencil.png';
import profileImg from '../src_assets/profile.png';
import linkImg from '../src_assets/link.png';
import * as C from './ComStyle';

function About() {
  return (
    <AboutWrapper>
      <C.Container>
        <C.Title>
          <C.StyledImg src={linkImg} alt="" />
          <h1>About ME</h1>
        </C.Title>
        <GridWrapper>
          <Row justify="space-between" gutter={[16, 16]}>
            <StyledCol xl={8} md={12} xs={24}>
              <img src={profileImg} alt="" />
              <ContentsWrapper>
                <h1>이름</h1>
                <p>심은광</p>
              </ContentsWrapper>
            </StyledCol>
            <StyledCol xl={8} md={12} xs={24}>
              <img src={calenderImg} alt="" />
              <ContentsWrapper>
                <h1>생년월일</h1>
                <p>96.12.03</p>
              </ContentsWrapper>
            </StyledCol>
            <StyledCol xl={8} md={12} xs={24}>
              <img src={mapImg} alt="" />
              <ContentsWrapper>
                <h1>주소지</h1>
                <p>인천 송도</p>
              </ContentsWrapper>
            </StyledCol>
            <StyledCol xl={8} md={12} xs={24}>
              <img src={callImg} alt="" />
              <ContentsWrapper>
                <h1>연락처</h1>
                <p>010-8426-2693</p>
              </ContentsWrapper>
            </StyledCol>
            <StyledCol xl={8} md={12} xs={24}>
              <img src={emailImg} alt="" />
              <ContentsWrapper>
                <h1>이메일</h1>
                <p>eungwang1203@gmail.com</p>
              </ContentsWrapper>
            </StyledCol>
            <StyledCol xl={8} md={12} xs={24}>
              <img src={pencilImg} alt="" />
              <ContentsWrapper>
                <h1>교육이력</h1>
                <p>인천대학교(전기과) 졸업</p>
                <p>엘리스SW 1기 수료 (21.10 ~ 22.03)</p>
              </ContentsWrapper>
            </StyledCol>
          </Row>
        </GridWrapper>
      </C.Container>
    </AboutWrapper>
  );
}

export default About;

const AboutWrapper = styled.div`
  padding-top: 15px;
`;

const GridWrapper = styled.div`
  margin-top: 20px;
`;

const StyledCol = styled(Col)`
  margin-left: 20px;
  display: flex;

  justify-content: center;
  margin: 0 auto;

  img {
    margin-top: 7px;
    margin-bottom: auto;
    width: 1.8rem;
  }
`;
const ContentsWrapper = styled.div`
  display: inline-block;
  margin-left: 30px;
  width: 10rem;
  h1 {
    font-size: 1.2rem;
    font-weight: 600;
  }
  p {
    font-size: 1rem;
    font-weight: 550;
    width: 300px;
  }
`;
