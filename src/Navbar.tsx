
import Darkmood from "./Darkmood";

const Navbar = () => {
  return (
      <div>
      <header className="nav">
  <div className={'container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'}>
    <a className={'flex title-font font-medium items-center  mb-4 md:mb-0'}>
   
      <span className="ml-3 text-xl">s-BOoks</span>
    </a>
    <nav className={'md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'}>
      <a className={'mr-5 hover:text-cyan-300'}>About</a>
      <a className={'mr-5 hover:text-gray-900'}>Home</a>
      <a className={'mr-5 hover:text-gra'}>contact us</a>
      
    </nav>
    <Darkmood/>
        
  </div>
      </header>
    

      



      </div>
  )
}

export default Navbar