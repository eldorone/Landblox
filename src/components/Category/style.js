import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  position: relative;
  margin: auto;
  padding: 96px 130px;
  max-width: 1440px;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-bottom: 32px;
`;
export { Container, Content };
