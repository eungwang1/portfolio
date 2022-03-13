import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import linkImg from '../src_assets/link.png';
import * as C from './ComStyle';
import cssImg from '../src_assets/css.png';
import githubImg from '../src_assets/github.png';
import gitlabImg from '../src_assets/gitlab.png';
import htmlImg from '../src_assets/html.png';
import gitImg from '../src_assets/git.png';
import jsImg from '../src_assets/js.png';
import nextImg from '../src_assets/next.png';
import reactImg from '../src_assets/react.png';
import recoilImg from '../src_assets/recoil.png';
import reduxImg from '../src_assets/redux.png';
import styledImg from '../src_assets/styled.png';
import tsImg from '../src_assets/ts.png';

interface SkillsProps {
  setSkillsScroll: Dispatch<SetStateAction<boolean>>;
  skillsScroll: boolean;
}

const Skills: React.FunctionComponent<SkillsProps> = ({ skillsScroll, setSkillsScroll }) => {
  const SkillsRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (skillsScroll === true) {
      SkillsRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
      setSkillsScroll(false);
    }
  }, [skillsScroll]);

  const FrontItem = [
    { src: htmlImg, name: 'HTML' },
    { src: cssImg, name: 'CSS' },
    { src: jsImg, name: 'Javascript' },
    { src: tsImg, name: 'Typescript' },
    { src: reactImg, name: 'React' },
    { src: nextImg, name: 'Next.js' },
    { src: reduxImg, name: 'Redux' },
    { src: recoilImg, name: 'Recoil' },
    {
      src: styledImg,
      name: (
        <div style={{ fontSize: '0.7rem', fontWeight: '700' }}>
          Styled
          <br />
          Components
        </div>
      ),
    },
  ];

  const VersionItem = [
    { src: gitImg, name: 'Git' },
    { src: githubImg, name: 'Github' },
    { src: gitlabImg, name: 'Gitlab' },
  ];

  return (
    <SkillsWrapper ref={SkillsRef}>
      <C.Container>
        <C.Title onClick={() => setSkillsScroll(true)}>
          <h1>SKILLS</h1>
        </C.Title>
        <ContentsWrapper>
          <ContentsContainer>
            <Subject>Frontend</Subject>
            <ItemWrapper>
              {FrontItem.map((item) => (
                <Item key={shortid.generate()}>
                  <StyledImg src={item.src} />
                  <ItemName>{item.name}</ItemName>
                </Item>
              ))}
            </ItemWrapper>
          </ContentsContainer>
        </ContentsWrapper>
        <ContentsWrapper>
          <ContentsContainer>
            <Subject>Version Control</Subject>
            <ItemWrapper>
              {VersionItem.map((item) => (
                <Item key={shortid.generate()}>
                  <StyledImg src={item.src} />
                  <ItemName>{item.name}</ItemName>
                </Item>
              ))}
            </ItemWrapper>
          </ContentsContainer>
        </ContentsWrapper>
      </C.Container>
    </SkillsWrapper>
  );
};

export default Skills;

const SkillsWrapper = styled.div`
  background-color: #f9c51d;
  padding: 30px 0;
`;
const ContentsWrapper = styled.div`
  background-color: white;
  width: 80%;
  border-radius: 10px;
  + div {
    margin-top: 30px;
  }
`;

const ContentsContainer = styled.div`
  padding: 20px 0px;
`;

const Subject = styled.div`
  color: #f4623a;
  font-size: 1.7rem;
  font-weight: 650;
  border-bottom: 1px solid #777777;
  display: inline-block;
  margin-left: 2.6rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.6rem;
  margin-top: 30px;
`;
const StyledImg = styled.img`
  height: 3.5rem;
  object-fit: contain;
`;
const ItemName = styled.div`
  font-weight: 650;
  margin-top: 10px;
  text-align: center;
`;
