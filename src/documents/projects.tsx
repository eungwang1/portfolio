import testimg from '../src_assets/block01.png';

export const projects = [
  {
    ProjectName: 'KorgatherShop',
    date: '2022.02(1人 개인 프로젝트)',
    images: [testimg, testimg, testimg],
    explain: (
      <div>
        복잡한 상황에서의 N빵 계산을 도와 누가 누구에게 얼마를 보내야 하는지 계산해 주는 모바일 앱입니다. 동아리 활동을
        하던 당시 여러 모임에서 N빵 계산 시 어려움을 겪은 몇몇 상황에서 아이디어를 얻어 개발하였습니다.이미 Android
        Native로 개발을 완료한 프로젝트였지만, <br /> React Native의 학습을 위해 이를 다시 React Native로
        개발하였습니다. 이전 프로젝트와 달리 이번에는 전반적인 로직과 UI & UX를 개선하고 실제로 스토어에 출시까지 했다는
        점에서 의미가 있습니다. 이제는 마음만 먹으면 모바일 앱도 개발하고 출시할 수 있다는 자신감을 준 프로젝트입니다.
      </div>
    ),
    summary: [
      {
        title: '주요 기능',
        content: 'github.com/hjcdg1/dutch_pay_calculator_rn',
      },
      {
        title: 'GitHub',
        content: '참석자의 이름∙부담 금액∙비중 입력, 최소한으로 이체하는 방법 계산',
      },
      {
        title: 'URL',
        content: 'play.google.com/store/apps/details?id=com.dutch_pay_calculator_rn',
      },
      {
        title: 'Frontend',
        content: 'Next.js, TypeScript, Sass',
      },
      {
        title: 'Backend',
        content: 'Django REST Framework',
      },
    ],
  },
];
