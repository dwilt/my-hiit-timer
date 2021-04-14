import Link from 'next/link';
import { MyButton } from '../../components/MyButton';

export default function About() {
  return (
    <div>
      <Link href="/">
        <MyButton>Back home</MyButton>
        <MyButton onClick={() => console.log('hey')}>asdf</MyButton>
      </Link>
    </div>
  );
}
