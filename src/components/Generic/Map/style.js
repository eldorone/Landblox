import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: var(--padding);
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  margin-bottom: 24px;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ mt }) => mt && `${mt}px`};
margin - bottom: ${({ mb }) => mb && `${mb} px`};
`;

const Subtitle = styled.div`
font - style: normal;
font - weight: 600;
font - size: 14px;
line - height: 20px;
color: #0d263b;
margin - right: 8px;
`;

const Description = styled.div`
font - style: normal;
font - weight: 400;
font - size: 14px;
line - height: 20px;
color: #696969;
`;

export { Container, Title, Wrapper, Subtitle, Description };