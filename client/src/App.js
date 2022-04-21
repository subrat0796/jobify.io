import Landing from "./pages/Landing";
import styled from "styled-components";

const Button = styled.button`
  background: red;
  color: white;
`;

function App() {
  return (
    <div>
      Jobify.io
      <Landing />
    </div>
  );
}

export default App;
