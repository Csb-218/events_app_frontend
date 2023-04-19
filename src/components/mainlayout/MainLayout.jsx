import Header from '../header/Header';


const MainLayout = ({children}) => {
  return (
         <>
         <Header/>
         {children} 
         </>
  )
}

export default MainLayout