import { Container, Content, Icon } from './style';

export const Why = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Email /> South Korea, Seoul, Gwangjin-gu, Neungdong-ro, 209 세종대학교
        </Content.Item>
        <Content.Item>
          {' '}
          <Icon.Phone /> +82 10 1122 3344
        </Content.Item>
        <Content.Item>
          <Icon.Email /> landblox@gmail.com
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Wide Renge Of Properties</Content.Title>

        <Content.Item> Uzbekistan</Content.Item>
        <Content.Item> Singapore</Content.Item>
        <Content.Item> UAE</Content.Item>
        <Content.Item> South Korea</Content.Item>
      </Content>
      <Content>
        <Content.Title>Financing Made Easy</Content.Title>

        <Content.Item>Frontend </Content.Item>
        <Content.Item>Backend </Content.Item>
        <Content.Item>Mobile </Content.Item>
        <Content.Item>Flutter </Content.Item>
        <Content.Item>Android </Content.Item>
      </Content>
      <Content>
        <Content.Title>See Neighborhoods</Content.Title>

        <Content.Item>t.me/ landblox_info</Content.Item>
        <Content.Item>t.me/ landblox_ceo</Content.Item>
        <Content.Item>instagram.com/ landblox</Content.Item>
        <Content.Item>instagram.com/ landblox_info</Content.Item>
      </Content>
    </Container>
  );
};

export default Why;
