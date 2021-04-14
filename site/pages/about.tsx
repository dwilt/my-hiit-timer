import Link from 'next/link';
import styled from 'styled-components';

const MyButton = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;

  @media (max-width: 768px) {
    background: blue;
  }
`;

export default function About() {
  return (
    <div>
      <Link href="/">
        <MyButton>Back home</MyButton>
      </Link>
    </div>
  );
}
