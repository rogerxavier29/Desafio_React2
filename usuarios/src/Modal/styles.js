import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 100px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #fff;
  width: 360px;
  height: 250px;
  margin-top: -60px;
  border-radius: 3px;
  p {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
  }
`;
