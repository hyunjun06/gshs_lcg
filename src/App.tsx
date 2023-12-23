import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #111;
    align-items: center;
`;

function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default App;
