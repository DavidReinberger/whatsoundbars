import styled from 'styled-components';

const AmazonLink = styled.a`
  display: flex;
  flex-direction: column;

  > * {
    text-decoration: underline;
  }

  &:hover > * {
    text-decoration: none;
  }
`;

export default AmazonLink;
