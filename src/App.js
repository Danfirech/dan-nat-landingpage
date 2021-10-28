import styled from "styled-components";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;

  padding-left: 200px;
  padding-right: 200px;
`;

function App() {
  return (
    <Container>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
    </Container>
  );
}

export default App;
