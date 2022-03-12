import styled from 'styled-components';
import blockImg from './src_assets/block01.png';

function App() {
  return (
    <Layout>
      <FirstBlock
        style={{
          background: `linear-gradient(180deg,rgba(112,93,80,.8) 0,rgba(112,93,80,.8) 90%),url(${blockImg}) 50% no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <ContentWrapper>
          <Header>
            <div className="title">{`SEG's Portfolio`}</div>
            <div className="menu">
              <div>About me</div>
              <div>Skills</div>
              <div>Archiving</div>
              <div>Career</div>
            </div>
          </Header>
          <Title>
            - 심은광 - <br /> 프론트엔드 개발자
          </Title>
          <Hr />
          <Content>
            매일매일 성장하는 <br /> 프론트엔드 개발자 심은광입니다. <br /> 끈기있는 성격과 실천력이 저의 장점입니다.
          </Content>
          <div className="moreviewBtn">더 알아보기 ↓</div>
        </ContentWrapper>
      </FirstBlock>
      <img src="./src_assets/block01.png" alt="" style={{ width: '500px', height: '500px' }} />
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  height: 100%;

  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  padding: 25px 0;
  .moreviewBtn {
    text-align: center;
    cursor: pointer;
    width: 150px;
    margin: 20px auto;
    padding: 20px 10px;
    border-radius: 30px;
    background-color: orange;
    color: white;
    font-weight: 600;
    :hover {
      background-color: #ffa500d9;
    }
  }
`;

const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 590px;
  align-items: center;
`;

const Header = styled.div`
  color: #cecbc8;
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  .title {
    cursor: pointer;
    margin-right: auto;
    font-weight: 700;
    font-size: 1.9rem;
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
  color: white;
`;

const Content = styled.div`
  margin: 0 auto;
  text-align: center;
  color: #d2cdcc;
  line-height: 1.5;
  font-size: 1.1rem;
  font-weight: 510;
`;

const Hr = styled.div`
  content: '';
  border-bottom: 4px solid orange;
  border-radius: 5px;
  width: 50px;
  margin: 20px auto;
`;
