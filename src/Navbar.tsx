
import Darkmood from "./Darkmood";

const Navbar = () => {
  return (
      <div>
      <header className="body-font">
  <div className={'container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'}>
    <a className={'flex title-font font-medium items-center  mb-4 md:mb-0'}>
   
      <span className="ml-3 text-xl">Dark mood</span>
    </a>
    <nav className={'md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'}>
      <a className={'mr-5 hover:text-gray-900'}>First Link</a>
      <a className={'mr-5 hover:text-gray-900'}>Second Link</a>
      <a className={'mr-5 hover:text-gray-900'}>Third Link</a>
      <a className={'mr-5 hover:text-gray-900'}>Fourth Link</a>
    </nav>
    <Darkmood/>
          <button className={'inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'}>
     
    </button>
  </div>
      </header>
    

      
<section data-section-id="1" data-category="http-codes" data-component-id="c311001c_01_awz" class="relative py-20 2xl:py-40  overflow-hidden" data-path="0">
   
        <img class="absolute top-0 right-0 h-40 lg:h-80 lg:mr-64 lg:mt-24" src="https://shuffle.dev/zospace-assets/images/five-stars.svg" alt="" data-config-id="auto-img-2" data-path="0.1"/>
   
       
        <div class="relative container px-4 mx-auto" data-path="0.4">
          <div class="max-w-3xl mx-auto" data-path="0.4.0">
            <div class="max-w-xl" data-path="0.4.0.0">
           
              <h2 class="mt-12 mb-14 text-5xl font-bold font-heading text-white" data-config-id="header" data-path="0.4.0.0.1">Sorry, we can't find that page or something has gone wrong...</h2>
              <p class="mb-20 text-xl text-gray-200" data-config-id="desc" data-path="0.4.0.0.2">Go back or try here:</p>
             <div className=" flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="88.209" height="98.922" viewBox="0 0 88.209 98.922" className=" sprite-arrow"><path d="M79.79,93.774l-2.981,1.17-1.641.6-3.195,1.112c-4.176,1.41-8,2.525-11.282,3.3-6.561,1.548-10.941,1.733-11.585.189s2.569-4.527,8.285-8.1c2.425-1.516,5.322-3.141,8.544-4.8A57.408,57.408,0,0,1,48.179,81.8,60.135,60.135,0,0,1,38.5,75.7,58.62,58.62,0,0,1,29.7,67.015,61.125,61.125,0,0,1,18.809,46.249a68.736,68.736,0,0,1-3.02-18.388A53.086,53.086,0,0,1,15.95,20.8c.086-1.034.147-1.993.287-2.873s.3-1.682.466-2.4c.65-2.878,1.407-4.432,2.244-4.431s1.676,1.547,2.473,4.275c.2.682.4,1.438.589,2.264l.7,2.662c.488,1.9.9,4.068,1.571,6.4a110.967,110.967,0,0,0,5.058,15.825,66.468,66.468,0,0,0,9.768,16.843,60.866,60.866,0,0,0,6.913,7.144,67.012,67.012,0,0,0,7.545,5.506,78,78,0,0,0,14.7,6.927c.152.054.3.1.446.155-2.663-3.208-4.966-6.216-6.789-8.867-3.819-5.554-5.579-9.57-4.372-10.73s5.15.754,10.551,4.788c2.7,2.017,5.765,4.563,9.034,7.52L79.622,74.1l1.268,1.2,2.267,2.26c3.354,3.371,6.86,6.955,10.378,10.614C88.855,90.127,84.209,92.018,79.79,93.774Z" transform="translate(-16.963 0.383) rotate(-7)" fill="currentColor"></path></svg>
             <div class="sm:max-w-md mb-8 sm:flex sm:items-center sm:bg-white sm:rounded-full">
            <span class="hidden sm:inline-block pl-2 sm:pl-6 lg:pl-10">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="18.5" r="9.5" fill="#1F40FF" fill-opacity="0.15"></circle><circle cx="18.5" cy="18.5" r="18.5" fill="#1F40FF" fill-opacity="0.06"></circle><circle cx="18.5" cy="18.5" r="2.5" fill="#282C36"></circle></svg>
            </span>
            <input class="w-full sm:w-auto mb-4 sm:mb-0 pl-8 sm:pl-4 py-5 rounded-full placeholder-gray-900 font-bold focus:outline-none" type="email" placeholder="Drop your Email"/>
            <button class="w-full  ml-auto px-10 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">Subscribe</button>
          </div>
             </div>
           
             
              <img class="absolute top-0 left-0 h-40 lg:h-80 lg:mr-64 lg:mt-24" src="https://shuffle.dev/zospace-assets/images/five-stars.svg" alt="" data-config-id="auto-img-2" data-path="0.1"/>
              
            </div>
          </div>
        </div>
      </section>


      </div>
  )
}

export default Navbar