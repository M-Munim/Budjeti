import React from 'react';

const JoinUs = () => {
  return (
    <section className="py-16 px-4 mb-44">
        <div className=" w-9/12 mx-auto relative bg-white rounded-3xl  ">
          
   
            <div className="absolute  w-1/2 right-10" >
              <h2 className="text-[44px] p-2 font-bold text-gray-900 leading-tight">
                Join 1+ million people who already trust us with their money
              </h2>
            </div>

              <div className="relative top-52 p-5 bg-[#F2F4F7] rounded-2xl w-full right-10 ">
          <div className="absolute left-64 -top-52 ">
            <img 
              src="/women.png"
              alt="Professional woman with tablet"
              className="w-[450px] h-[450px] object-cover object-center"
            />
          </div>
          <div className="ml-[680px] w-[40%] p-2 ">
                <p className="text-gray-600 ">
                Overall, this app has been a life-changer for me. It has revolutionized the way I approach my finances, providing me with the tools, insights, and security I need to unlock my financial freedom.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 text-[36px]">Jenny Doe</h4>
                </div>
                
                <div className="flex space-x-2 mr-10">
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600 text-xl">
                    ←
                  </button>
                  <button className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition-colors text-gray-900 text-xl">
                    →
                  </button>
                </div>
            
            </div>
             <div>
              <button className="mt-5 bg-[#1929D6] cursor-pointer text-white px-8 py-4   text-lg transition-colors inline-flex items-center space-x-2">
                <span>Join Now</span>
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>

         {/* <div className="absolute  left-24 top-0 bottom-0 ">
            <img 
              src="/women.png"
              alt="Professional woman with tablet"
              className="w-[600px] h-[600px] object-cover object-center"
            />
          </div> */}
      </div>

            {/* CTA Button */}
         
      </div>
    </section>
  );
};

export default JoinUs;