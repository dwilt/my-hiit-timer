import Link from 'next/link';
import { MyButton } from '../components/MyButton';

export default function About() {
  return (
    <div>
      <Link href="/">
        <MyButton isActive={true} onClick={() => console.log('hey')}>
          Back home
        </MyButton>
      </Link>
    </div>
  );
}
