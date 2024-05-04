import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hello',
};

export default function HomePage() {
  return <main>Hello world!</main>;
}
