'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to the desired page when the component mounts
    router.push('/user/login');
  }, []); // Empty dependency array to run the effect only once
  return (
    <></>
  )
}
