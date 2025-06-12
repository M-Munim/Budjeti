import React from 'react';

const JoinUs = () => {
  return (
    <section className="py-16 px-4 lg:mb-44">
        <div className=" w-9/12 mx-auto relative bg-white rounded-3xl  ">
          
   
            <div className="lg:absolute w-full lg:w-1/2 lg:right-10" >
              <h2 className="text-[24px] -mt-10 lg:-mt-0 text-center lg:text-left lg:text-[44px] p-2 font-bold text-gray-900 leading-tight">
                Join 1+ million people who already trust us with their money
              </h2>
            </div>

              <div className="lg:relative lg:top-52 p-5 bg-[#F2F4F7] rounded-2xl w-full right-10 ">
          <div className="hidden lg:block lg:absolute top-16 lg:left-64 lg:-top-52 ">
            <img 
              src="/women.png"
              alt="Professional woman with tablet"
              className="lg:w-[450px] lg:h-[450px] object-cover object-center"
            />
          </div>
          <div className="lg:ml-[680px] w-full lg:w-[40%] lg:p-2 ">
                <p className="text-gray-600 text-center lg:text-left">
                Overall, this app has been a life-changer for me. It has revolutionized the way I approach my finances, providing me with the tools, insights, and security I need to unlock my financial freedom.
              </p>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h4 className="font-semibold text-gray-900 text-[16px] lg:text-[36px]">Jenny Doe</h4>
                </div>
                
                <div className="flex space-x-2 mr-10 mt-2">
                  <button className="w-6 h-6 lg:w-10 lg:h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600 text-xl">
                    ←
                  </button>
                  <button className="w-6 h-6 lg:w-10 lg:h-10  rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition-colors text-gray-900 text-xl">
                    →
                  </button>
                </div>
            
            </div>
             <div>
              <button className="mt-5 whitespace-nowrap w-[90px] text-[10px] lg:text-[18px] h-[30px] lg:w-[180px] lg:h-[60px] bg-[#1929D6] cursor-pointer text-white px-4 lg:px-8 py-4 transition-colors inline-flex items-center space-x-2">
                <span className=''>Join Now</span>
                <span className="">→</span>
              </button>
            </div>
          </div>

       
      </div>

         
      </div>
    </section>
  );
};

export default JoinUs;