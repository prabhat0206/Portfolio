import HomePage from '$components/homePage/homePage';
import { Inter } from '@next/font/google';
import "swiper/css/bundle";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='flex w-full h-full'>
      <HomePage />
    </div>
      
    </>
  )
}
