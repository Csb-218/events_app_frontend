import '@/styles/globals.css'
import MainLayout from '../components/mainlayout/MainLayout';

export default function App({ Component, pageProps }) {
  return (
    <>
    <MainLayout >
        <Component {...pageProps} />
    </MainLayout>
    
    </>

  )
}
