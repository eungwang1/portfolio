import testimg from '../src_assets/block01.png';
import korgathershop01 from './projectImg/korgathershop01.gif';
import korgathershop02 from './projectImg/korgathershop02.gif';
import korgathershop03 from './projectImg/korgathershop03.gif';

export const projects = [
  {
    ProjectName: 'KorgatherShop',
    date: '2022.02(1人 개인 프로젝트)',
    images: [korgathershop01, korgathershop02, korgathershop03],
    explain: (
      <div>
        <span>게더타운에서 제공해주는 API를 가공해서, 기존 게더타운에 없는 기능들을 제공해주는 서비스입니다.</span>
        <br />
        프론트엔드 개발을 시작하고 처음 만든 웹서비스 입니다. 현재 운영중인 게더타운커뮤니티 회원들에게, 좀 더 폭 넓은
        경험을 제공해드리고자 만든 서비스이며, 이용자들에게 좋은 후기를 받고 있습니다.
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
            github.com/eungwang1/gathertownApiFactory
          </a>
        ),
      },
      {
        title: 'URL',
        content: (
          <a href="https://korgather.shop/" target="_blank" rel="noreferrer">
            korgather.shop
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
