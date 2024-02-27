import styled from 'styled-components';

export const Container = styled.div`
.map {
    text-align: center;
  }
  
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  }
  
  .map-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .map-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
