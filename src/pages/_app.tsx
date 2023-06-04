import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <div className="px-10 md:px-40 lg:px-72 dark:bg-black">
        <Component key={router.asPath} {...pageProps} />
      </div>
    </AnimatePresence>
  );
}
