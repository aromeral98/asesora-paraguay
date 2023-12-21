// pages/404.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
      router.push('/en/home');

  }, []);

  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <p>Redirigiendo a /en...</p>
    </div>
  );
};

export default NotFoundPage;
