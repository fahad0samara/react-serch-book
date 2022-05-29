import { useEffect, useState } from "react";
import axios from "axios";
import img from '../img/2.png'

const sceion = () => {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [loading, setLoading] = useState(false);
  const onkeyPress = e => {
    e.preventDefault();
  };
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCAvTHLk8ZQz7_W3FWXLiXIqwnyhjt_mfI`
        )
        .then(function (response) {
      
          setLoading(false);
          setData(response.data.items);
        })
        .catch(function (error) {
          console.error(error);
        });
      setLoading(true);
    }, 100);
  }, [search]);
  return (
    <div className=''>
      <section className="relative  grn text-white  overflow-hidden" >
      <img  className="absolute hidden md:block -right-16 top-3 h-56 lg:h-auto
      
      lg:mr-16 -mt-40" src={img} alt="" />
        <img
          className="absolute top-0 -right-12 h-40 lg:h-80 lg:mr-64 lg:mt-24"
          src="https://shuffle.dev/zospace-assets/images/five-stars.svg"
          alt=""
          data-config-id="auto-img-2"
          data-path="0.1"
        />
         <img
          className="absolute top-0 right-12 h-40 lg:h-80 lg:mr-64 lg:mt-24"
          src="https://shuffle.dev/zospace-assets/images/five-stars.svg"
          alt=""
          data-config-id="auto-img-2"
          data-path="0.1"
        />
       
        

        <div className="relative container px-4 mx-auto" data-path="0.4">
       
          <div className="max-w-3xl mx-auto" data-path="0.4.0">
            <div className="max-w-xl" data-path="0.4.0.0">
           
              <h2
                className="mt-12 mb-14 text-5xl font-bold font-heading "
                data-config-id="header"
                data-path="0.4.0.0.1"
              >
                Do you have a specific book then do a search now...
              </h2>
              <p
                className="mb-20 text-xl text-black font-black "
                data-config-id="desc"
                data-path="0.4.0.0.2"
              >
                Go and try here:
              </p>
              <div className=" flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="88.209"
                  height="98.922"
                  viewBox="0 0 88.209 98.922"
                  className=" sprite-arrow"
                >
                  <path
                    d="M79.79,93.774l-2.981,1.17-1.641.6-3.195,1.112c-4.176,1.41-8,2.525-11.282,3.3-6.561,1.548-10.941,1.733-11.585.189s2.569-4.527,8.285-8.1c2.425-1.516,5.322-3.141,8.544-4.8A57.408,57.408,0,0,1,48.179,81.8,60.135,60.135,0,0,1,38.5,75.7,58.62,58.62,0,0,1,29.7,67.015,61.125,61.125,0,0,1,18.809,46.249a68.736,68.736,0,0,1-3.02-18.388A53.086,53.086,0,0,1,15.95,20.8c.086-1.034.147-1.993.287-2.873s.3-1.682.466-2.4c.65-2.878,1.407-4.432,2.244-4.431s1.676,1.547,2.473,4.275c.2.682.4,1.438.589,2.264l.7,2.662c.488,1.9.9,4.068,1.571,6.4a110.967,110.967,0,0,0,5.058,15.825,66.468,66.468,0,0,0,9.768,16.843,60.866,60.866,0,0,0,6.913,7.144,67.012,67.012,0,0,0,7.545,5.506,78,78,0,0,0,14.7,6.927c.152.054.3.1.446.155-2.663-3.208-4.966-6.216-6.789-8.867-3.819-5.554-5.579-9.57-4.372-10.73s5.15.754,10.551,4.788c2.7,2.017,5.765,4.563,9.034,7.52L79.622,74.1l1.268,1.2,2.267,2.26c3.354,3.371,6.86,6.955,10.378,10.614C88.855,90.127,84.209,92.018,79.79,93.774Z"
                    transform="translate(-16.963 0.383) rotate(-7)"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="sm:max-w-md mb-8 sm:flex sm:items-center sm:bg-white sm:rounded-full">
                  <span className="hidden sm:inline-block pl-2 sm:pl-6 lg:pl-10"></span>
                  <div className=" flex items-center text-center">
                    <input
                      value={search}
                      onClick={onkeyPress}
                      onChange={e => setsearch(e.target.value)}
                      className=" sm:w-auto mb-4 sm:mb-0 pl-8 sm:pl-4 py-5 sm:px-10  placeholder-cyan-500 text-black font-bold focus:outline-none"
                      type="Search"
                      placeholder="Search for a book"
                    />
                    <button className="mb-4 sm:rounded-full  sm:mb-0   sm:ml-auto px-5 sm:px-10 py-5 font-black   bg-cyan-300 text-black font-bold hover:bg-blue-600 transition duration-200">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            
              <img
                className="absolute top-0 left-0 h-40 lg:h-80 lg:mr-64 lg:mt-24"
                src="https://shuffle.dev/zospace-assets/images/five-stars.svg"
                alt=""
                data-config-id="auto-img-2"
                data-path="0.1"
              />
          
            </div>
          </div>
          
        </div>
      </section>
      <div>
       
          <div className=" grid xl:grid-cols-3  grid-cols-2 lg:grid-cols-5    gap-8">
            {data &&
              data
                .filter(item =>
                  item.volumeInfo.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="   w-40   rounded-2xl shadow-2xl ">
                        <div className="px-4 py-2">
                          <h1 className="text-lg font-bold ">
                            {item.volumeInfo.title}
                          </h1>
                        </div>
                        
                        <img
                          className="object-contain h-48 mt-2"
                          src={item.volumeInfo.imageLinks.thumbnail}
                          alt="NIKE AIR"
                        />

                        <div className="flex items-center justify-between px-4 py-2     ">

                          <a
                            href={item.volumeInfo.infoLink}
                            className="px-2 py-1 text-xl font-semibold   transition-colors duration-200 rounded-2xl bg-green-500 hover:bg-red-50 "
                          >
                            red more..
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
          
        
        <img
                className="absolute top-0 left-0 h-40 lg:h-80 lg:mr-64 lg:mt-24"
                src="https://shuffle.dev/zospace-assets/images/five-stars.svg"
                alt=""
                data-config-id="auto-img-2"
                data-path="0.1"
              />
      </div>
    </div>
  );
};

export default sceion;
