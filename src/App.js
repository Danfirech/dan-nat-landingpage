import styled from "styled-components";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
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
        <Services />
      </Container>
      <Container>
        <About />
      </Container>
      <Container>
        <Contact />
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
