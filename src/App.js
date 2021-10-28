import styled from "styled-components";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding-left: 200px;
  padding-right: 200px;
`;

function App() {
  return (
    <div>
      <Container>
        <NavBar />
        <Home />
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
