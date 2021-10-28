import styled from "styled-components";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: lightblue;
`;

function App() {
  return (
    <Container>
      <NavBar></NavBar>
      <Home></Home>
    </Container>
  );
}

export default App;
