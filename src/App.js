import styled from "styled-components";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: lightblue;
  padding-left: 80px;
  padding-right: 80px;
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
