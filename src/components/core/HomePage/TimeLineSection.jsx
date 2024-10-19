import React from 'react'

import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const timeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];

const TimeLineSection = () => {
  return (
<div>
      <div className="flex flex-col lg:flex-row gap-15 items-center">

      <div className='lg:w-[45%] flex flex-col gap-14 lg:gap-3'>
  {
   timeLine.map((element , index)=>{
    return(
       <div className="flex flex-col lg:gap-3" key={index}>
       <div className='flex flex-row gap-6 ' key={index}>

<div className='w-[50px] h-[50px] bg-white flex items-center'>
  <img src={element.Logo}/>
</div>

<div>
 <h2 className="font-semibold text-[18px]">{element.Heading}</h2>
 <p className="text-base">{element.Description}</p>
</div>
            
</div>

<div
         className={`hidden ${
                    timeLine.length - 1 === index ? "hidden" : "lg:block"
                  }  h-10 border-dotted border-l  border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
       </div>
      
      
    );
   })
  }
      </div>
     
      <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div className="absolute lg:left-[50%] lg:bottom-0  lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
            {/* Section 1 */}
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">10</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                Years experiences
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">250</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                types of courses
              </h1>
            </div>
            <div></div>
          </div>
          <img
            src={TimeLineImage}
            alt="timelineImage"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
          />
        </div>
      </div>
</div>
  )
}

export default TimeLineSection