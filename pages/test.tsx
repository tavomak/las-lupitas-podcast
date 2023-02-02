import { useRouter } from 'next/router';

export default function Test() {
  const router = useRouter();

  return (
    <a href="#!" onClick={() => router.push('/')}>test</a>
  );
}
