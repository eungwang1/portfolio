import korgathershop01 from './projectImg/korgathershop01.gif';
import korgathershop02 from './projectImg/korgathershop02.gif';
import korgathershop03 from './projectImg/korgathershop03.gif';
import Metabook01 from './projectImg/Metabook01.png';
import Metabook02 from './projectImg/Metabook02.png';
import Metabook03 from './projectImg/Metabook03.png';
import Metabook04 from './projectImg/Metabook04.png';
import yorizori05 from './projectImg/yorizori05.png';
import yorizori06 from './projectImg/yorizori06.png';
import yorizori07 from './projectImg/yorizori07.png';
import yorizori08 from './projectImg/yorizori08.png';
import yorizori09 from './projectImg/yorizori09.png';
import yorizori10 from './projectImg/yorizori10.png';
import yorizori11 from './projectImg/yorizori11.png';
import yorizori12 from './projectImg/yorizori12.png';
import yorizori13 from './projectImg/yorizori13.png';
import yorizori14 from './projectImg/yorizori14.png';
import MetaverseStation01 from './projectImg/MetaverseStation01.png';
import MetaverseStation02 from './projectImg/MetaverseStation02.png';
import MetaverseStation03 from './projectImg/MetaverseStation03.png';
import MetaverseStation04 from './projectImg/MetaverseStation04.png';

export const projects = [
  {
    ProjectName: 'MetaverseStation',
    date: '2022.3 (2人 팀 프로젝트) - 진행중',
    images: [MetaverseStation01, MetaverseStation03, MetaverseStation04, MetaverseStation02],
    explain: (
      <div>
        <span>METABOOK은 회원들이 서로 자신의 메타버스 공간을 공유할 수 있는 커뮤니티입니다.</span>
        <br />
        메타버스 서비스가 발전해감에 따라, 누구나 손쉽게 자신만의 메타버스 공간을 만들 수 있게 되었습니다. METABOOK은
        자신이 만든 메타버스 공간을 자랑하고, 다른 사람의 메타버스 공간을 탐험할 수 있는 서비스를 제공하고자
        기획되었습니다.
        <br />
        <div className="lessbr">팀 내에서 나의 역할 </div>
        <ul>
          <li>전체적인 프로젝트 기획</li>
          <li>프론트엔드 개발</li>
          <li>현재 진행중 ... </li>
        </ul>
      </div>
    ),
    summary: [
      {
        title: '주요 기능',
        content:
          'OAuth로그인, SSR, 카데고리별 필터 및 정렬, 게시글 작성, 댓글 및 대댓글, 북마크, 좋아요 , 메타버스링크 연결',
      },
      {
        title: 'GitHub',
        content: (
          <a href="https://github.com/eungwang1/MetaverseStation" target="_blank" rel="noreferrer">
            MetaverseStation-Repo
          </a>
        ),
      },
      {
        title: 'Frontend',
        content: 'React, Next.js, Redux, StyledComponent, AntDesign',
      },
      {
        title: 'Backend',
        content: 'Spring, MySql',
      },
      {
        title: 'Deployment',
        content: 'AWS S3, AGINX, Docker',
      },
    ],
  },
  {
    ProjectName: 'Yorizori',
    date: '2022.2 (5人 팀 프로젝트)',
    images: [
      yorizori05,
      yorizori06,
      yorizori07,
      yorizori08,
      yorizori09,
      yorizori10,
      yorizori11,
      yorizori12,
      yorizori13,
      yorizori14,
    ],
    explain: (
      <div>
        <span>{`"요리" + "조리" : 요리를 조리해먹는 사람을 위한 레시피 공유 모바일 플랫폼 입니다.`}</span>
        <br />
        자신만의 레시피를 공유하면서 요리 경험의 만족도를 높이고, 요리에 대한 진입장벽을 낮추고자 기획 되었습니다.
        <br />
        <div className="lessbr">팀 내에서 나의 역할 </div>
        <ul>
          <li>로그인, 회원가입, 게시글 작성, 디테일 페이지 구현</li>
          <li>피그마를 활용한 레이아웃 구성</li>
          <li>AGINX 연결</li>
        </ul>
      </div>
    ),
    summary: [
      {
        title: '주요 기능',
        content:
          '카데고리별 필터 및 정렬, 레시피 공유, 멀티타이머 , 로그인 , 회원가입 , 랜덤레시피, 게시글 작성, 댓글 및 대댓글  ',
      },
      {
        title: 'GitHub',
        content: (
          <a href="https://github.com/eungwang1/YorizoriProject" target="_blank" rel="noreferrer">
            YoriZori-Repo
          </a>
        ),
      },
      // {
      //   title: 'URL',
      //   content: (
      //     <a href="http://13.125.179.180/" target="_blank" rel="noreferrer">
      //       MetaBook
      //     </a>
      //   ),
      // },
      {
        title: 'Frontend',
        content: 'React, Recoil, StyledComponent',
      },
      {
        title: 'Backend',
        content: 'NodeJS, ExpressJS, MongoDB',
      },
      {
        title: 'Deployment',
        content: 'AWS S3, AGINX',
      },
    ],
  },
  {
    ProjectName: 'MetaBook',
    date: '2022.1 (5人 팀 프로젝트)',
    images: [Metabook01, Metabook02, Metabook03, Metabook04],
    explain: (
      <div>
        <span>METABOOK은 회원들이 서로 자신의 메타버스 공간을 공유할 수 있는 커뮤니티입니다.</span>
        <br />
        메타버스 서비스가 발전해감에 따라, 누구나 손쉽게 자신만의 메타버스 공간을 만들 수 있게 되었습니다. METABOOK은
        자신이 만든 메타버스 공간을 자랑하고, 다른 사람의 메타버스 공간을 탐험할 수 있는 서비스를 제공하고자
        기획되었습니다.
        <br />
        <div className="lessbr">팀 내에서 나의 역할 </div>
        <ul>
          <li>전체적인 프로젝트 기획</li>
          <li>로그인, 회원가입 , 상세보기 모달창 구현</li>
          <li>AWS 서버배포 및 AGINX 연결</li>
        </ul>
      </div>
    ),
    summary: [
      {
        title: '주요 기능',
        content: '로그인, 회원가입, 게시글 작성 , 댓글, 좋아요, 메타버스링크 연결',
      },
      {
        title: 'GitHub',
        content: (
          <a href="https://github.com/eungwang1/MetaBookProject" target="_blank" rel="noreferrer">
            MetaBook-Repo
          </a>
        ),
      },
      {
        title: 'URL',
        content: (
          <a href="http://13.125.179.180/" target="_blank" rel="noreferrer">
            MetaBook
          </a>
        ),
      },
      {
        title: 'Frontend',
        content: 'HTML, CSS, JAVASCRIPT',
      },
      {
        title: 'Backend',
        content: 'NodeJS, ExpressJS, MongoDB',
      },
      {
        title: 'Deployment',
        content: 'AWS S3, AGINX',
      },
    ],
  },
  {
    ProjectName: 'KorgatherShop',
    date: '2021.12 (1人 개인 프로젝트)',
    images: [korgathershop01, korgathershop02, korgathershop03],
    explain: (
      <div>
        <span>게더타운에서 제공해주는 API를 가공해서, 기존 게더타운에 없는 기능들을 제공해주는 서비스입니다.</span>
        <br />
        프론트엔드 개발을 시작하고 처음 만든 웹서비스 입니다. 현재 제가 운영중인 게더타운커뮤니티의 회원들에게, 좀 더 폭
        넓은 경험을 제공해드리고자 만든 서비스이며, 이용자들에게 좋은 후기를 받고 있습니다.
        <br /> 실제 이용자가 있는 서비스를 만들었다는 것에 성취감을 느꼈고, 웹 개발에 대한 자신감을 심어 준
        프로젝트입니다.
        <br />
      </div>
    ),
    summary: [
      {
        title: '주요 기능',
        content: '맵파일 추출 및 적용, 배경음악 넣기',
      },
      {
        title: 'GitHub',
        content: (
          <a href="https://github.com/eungwang1/gathertownApiFactory" target="_blank" rel="noreferrer">
            Korgathershop-Repo
          </a>
        ),
      },
      {
        title: 'URL',
        content: (
          <a href="https://korgather.shop/" target="_blank" rel="noreferrer">
            Korgathershop
          </a>
        ),
      },
      {
        title: 'Frontend',
        content: 'HTML, CSS, JAVASCRIPT',
      },
      {
        title: 'Deployment',
        content: 'AWS S3',
      },
    ],
  },
];
