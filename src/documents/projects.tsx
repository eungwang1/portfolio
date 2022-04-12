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
import SimShop01 from './projectImg/SimShop01.png';
import SimShop02 from './projectImg/SimShop02.png';
import SimShop03 from './projectImg/SimShop03.png';

export const projects = [
  {
    ProjectName: '모두의 메타버스',
    date: '2022.3 (2人 팀 프로젝트) - 진행중',
    images: [
      { src: MetaverseStation01, text: '메인 페이지' },
      { src: MetaverseStation03, text: '디테일 모달창' },
      { src: MetaverseStation04, text: '마이 페이지' },
      { src: MetaverseStation02, text: '로그인 페이지' },
    ],
    explain: (
      <div>
        <span>METABOOK은 회원들이 서로 자신의 메타버스 공간을 공유할 수 있는 커뮤니티입니다.</span>
        <br />
        메타버스 서비스가 발전해감에 따라, 누구나 손쉽게 자신만의 메타버스 공간을 만들 수 있게 되었습니다. 모두의
        메타버스는 자신이 만든 메타버스 공간을 자랑하고, 다른 사람의 메타버스 공간을 탐험할 수 있는 서비스를 제공하고자
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
          <>
            <a href="https://github.com/eungwang1/ModuMeta" target="_blank" rel="noreferrer">
              ModuMeta - front
            </a>
            <br />
            <a href="https://github.com/Korgather/MetaverseStation_Back" target="_blank" rel="noreferrer">
              ModuMeta - back
            </a>
          </>
        ),
      },
      {
        title: 'URL',
        content: (
          <a href="https://www.modumeta.com/" target="_blank" rel="noreferrer">
            ModuMeta
          </a>
        ),
      },
      {
        title: 'Frontend',
        content: 'TypeScript, React, Next.js, Redux, StyledComponent, AntDesign',
      },
      {
        title: 'Backend',
        content: 'Spring, MariaDB',
      },
      {
        title: 'Deployment',
        content: 'AWS, vercel',
      },
    ],
  },
  {
    ProjectName: 'My portfolio',
    date: '2022.3 (1人 개인 프로젝트)',
    images: [
      {
        src: 'https://user-images.githubusercontent.com/86244477/159426788-a2b7921a-6e61-4fab-977b-852b8dac8ed5.png',
        text: 'ABOUTME',
      },
      {
        src: 'https://user-images.githubusercontent.com/86244477/159426967-9324f00b-fc7d-46dc-9f35-6a0eef3b8aab.png',
        text: 'SKILLS',
      },
      {
        src: 'https://user-images.githubusercontent.com/86244477/159427013-7c3ac830-8a3f-4ed4-9f0e-db67ba2b8edc.png',
        text: 'ARCHIVING',
      },
      {
        src: 'https://user-images.githubusercontent.com/86244477/159427086-50c5228d-e6d3-4911-bbff-15aef5c86cb2.png',
        text: 'PROJECTS',
      },
      {
        src: 'https://user-images.githubusercontent.com/86244477/159427162-cd1248a3-c440-4d97-a166-2a71ad167c76.png',
        text: 'PROJECT - Modal',
      },
    ],
    explain: (
      <div>
        <span>프론트엔드 신입 개발자에 지원하기 위해 만든 포트폴리오 웹사이트 입니다.</span>
        <div className="lessbr">포트폴리오 개요</div>
        <ul>
          <li>ABOUT ME - 간단한 자기소개 및 인적사항</li>
          <li>SKILLS - 기술 스택 </li>
          <li>ARCHIVING - GITHUB, BLOG 및 CAFE 링크</li>
          <li>PROJECTS - 프로젝트 경험</li>
        </ul>
      </div>
    ),
    summary: [
      {
        title: '주요 기능',
        content: '간단한 자기소개, 기술스택, GITHUB, BLOG 및 CAFE 링크, 프로젝트 경험',
      },
      {
        title: 'GitHub',
        content: (
          <a href="https://github.com/eungwang1/portfolio" target="_blank" rel="noreferrer">
            portfolio-Repo
          </a>
        ),
      },
      {
        title: 'URL',
        content: (
          <a href="https://eungwang1.github.io/portfolio/" target="_blank" rel="noreferrer">
            {`SEG's Portfolio`}
          </a>
        ),
      },
      {
        title: 'Frontend',
        content: 'TypeScript, React, StyledComponent, AntDesign',
      },
      {
        title: 'Deployment',
        content: 'GithubPage',
      },
    ],
  },
  {
    ProjectName: `Sim's SaleShop`,
    date: '2022.3 ~ ing (개인 프로젝트)',
    images: [
      { src: SimShop01, text: '메인 페이지' },
      { src: SimShop02, text: '디테일 페이지-1' },
      { src: SimShop03, text: '디테일 페이지-2' },
    ],
    explain: (
      <div>
        <span>{`Sim's SaleShop은 쿠팡파트너스 활동을 위해 만든 웹사이트입니다.`}</span>
        <p>쿠팡에서 쿠팡파트너스 회원에게 제공해주는 API를 통해, 상품별 인기순위를 받아와서 이용하고 있습니다.</p>
        <div className="lessbr">- 메인페이지 </div>
        <ul>
          <li>웹사이트에 등록 되어있는 모든 상품항목을 보여줍니다.</li>
          <li>검색어자동완성 기능을 통해, 어떤 상품이 있는지 쉽게 조회할 수 있습니다.</li>
        </ul>
        <div className="lessbr">- 디테일페이지 </div>
        <ul>
          <li>상품별 인기아이템 상위 10개를 보여줍니다.</li>
          <li>카카오톡공유하기 기능을 통해, 상품정보를 공유할 수 있습니다.</li>
        </ul>
        <br />
      </div>
    ),
    summary: [
      {
        title: '주요 기능',
        content: '검색어 자동완성, 카카오톡 공유하기',
      },
      {
        title: 'GitHub',
        content: (
          <a href="https://github.com/eungwang1/CoupangPartnersWeb" target="_blank" rel="noreferrer">
            {`Sim's SaleShop-Repo`}
          </a>
        ),
      },
      {
        title: 'URL',
        content: (
          <a href="https://gwang.xyz/" target="_blank" rel="noreferrer">
            {`Sim's SaleShop`}
          </a>
        ),
      },
      {
        title: 'Frontend',
        content: 'Typescript, React, Next.js, Recoil, StyledComponent, AntDesign',
      },
      {
        title: 'Deployment',
        content: 'vercel',
      },
    ],
  },
  {
    ProjectName: 'Yorizori',
    date: '2022.2 (5人 팀 프로젝트)',
    images: [
      { src: yorizori05, text: '랜딩 페이지' },
      { src: yorizori06, text: '게시글 작성 페이지-1,2' },
      { src: yorizori07, text: '게시글 작성 페이지-3,4' },
      { src: yorizori08, text: '메인 페이지, 랜덤 레시피 모달창' },
      { src: yorizori09, text: '디테일 페이지-1' },
      { src: yorizori10, text: '디테일 페이지-2' },
      { src: yorizori11, text: '디테일 페이지-3, 댓글 더보기' },
      { src: yorizori12, text: '디테일 페이지-4' },
      { src: yorizori13, text: '마이 페이지' },
      { src: yorizori14, text: '로그인, 회원가입' },
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
    images: [
      { src: Metabook01, text: '메인페이지' },
      { src: Metabook02, text: '로그인페이지' },
      { src: Metabook03, text: '글쓰기페이지' },
      { src: Metabook04, text: '디테일 모달창' },
    ],
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
    images: [
      { src: korgathershop01, text: '맵파일 추출하기' },
      { src: korgathershop02, text: '맵파일 적용하기' },
      { src: korgathershop03, text: '배경음악 오브젝트 설치하기' },
    ],
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
