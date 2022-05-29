
const FatchData = ({item}) => {
  return (
      <div>
  <div className={' border-2 border-[#b3fcf1] border-opacity-60 rounded-lg overflow-hidden'}>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium ">{item.title}</h1>
  <img src={item.book_image} alt="" />
                <div className="flex items-center flex-wrap ">
                  <a className=" text-yellow-400 text-2xl inline-flex items-center md:mb-2 lg:mb-0">
                   {item.publisher}
                  </a>
                  <span
                    className={
                      "mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-green-200"
                    }
                  >
                   
                  
                  </span>
                  <a href={item.amazon_product_url}>
                       More info
                   </a>
                </div>
              </div>
            </div>
      </div>
  );
}

export default FatchData