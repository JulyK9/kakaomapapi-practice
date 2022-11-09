import './App.css';
import styled from 'styled-components';
import MapContainer from './MapContainer';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {


  return (
    <Container>
      <MapContainer />
    </Container>
  );
}

export default App;
