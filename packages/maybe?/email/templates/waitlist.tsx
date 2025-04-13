import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';

type WaitlistTemplateProps = {
  readonly name: string;
  readonly email: string;
  readonly message: string;
};

const main = {
  backgroundColor: '#000000',
  margin: '0 auto',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: 'auto',
  padding: '96px 20px 64px',
};

const h1 = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '40px',
  margin: '0 0 20px',
};

const text = {
  color: '#aaaaaa',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '0 0 40px',
};

export const WaitlistTemplate = ({
  name,
}: WaitlistTemplateProps) => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>Thank you for joining our waitlist and for your patience {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Head style={h1}>
            Coming Soon.
          </Head>
          <Text style={text}>
            Thank you {name} for joining our waitlist and for your patience. We
            will send you a note when we have something new to share.
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

const ExampleWaitlistEmail = () => (
  <WaitlistTemplate
    name="Jane Smith"
    email="jane@example.com"
    message="Hello, how do I get started?"
  />
);

export default ExampleWaitlistEmail;
