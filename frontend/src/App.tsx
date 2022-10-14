import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const GNB_HEIGHT = 60;
const SNB_WIDTH = 80;

type Element = JSX.Element;

const Header = styled.header`
  background-color: #999999;
  width: 100%;
  height: ${GNB_HEIGHT}px;
  position: fixed;
  z-index: 99;
`;

const Main = styled.main`
  padding-top: ${GNB_HEIGHT}px;
  padding-left: ${SNB_WIDTH}px;
  display: flex;
  height: 90vh;
`;

const Nav = styled.nav`
  background: aqua;
  width: ${SNB_WIDTH}px;
  height: 100%;
  padding-top: ${GNB_HEIGHT}px;
  position: fixed;
`;

const Section = styled.section`
  flex-direction: column;
  background-color: gray;
  width: 95vw;
`;

const MainHeader = styled.div``;

const Gnb = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

function App(): Element {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Gnb>
          <div className="gnb-title">Weekly Workly</div>
          <Wrapper>
            <div>상태</div>
            <div>사진</div>
            <div>
              <div>전유진</div>
              <div>Business Developer</div>
            </div>
          </Wrapper>
        </Gnb>
      </Header>
      <Nav>Nav 1</Nav>
      <Main>
        <Section>
          <MainHeader>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
            hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
            consequat, leo eget bibendum sodales, augue velit cursus nunc,
          </MainHeader>
        </Section>
      </Main>
    </>
  );
}

export default App;
