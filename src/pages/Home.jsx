import React from "react"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import HighlightText from "../components/core/HomePage/HighlightText"
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimeLineSection from "../components/core/HomePage/TimeLineSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import Footer from "../components/common/Footer"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import ReviewSlider from "../components/common/ReviewSlider"

const Home=()=>{
    return(
        <div> 
        <Link to="/calculator">Calculator</Link>
            {/*Section 1*/}
            <div className="mx-auto relative flex flex-col w-9/12 items-center max-w-maxContent text-white justify-between ">

          <Link to={"/signup"}>
            <div  className="mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 
            transition-all duration-200 hover:scale-95 w-fit group">     
                <div className="flex flex-row items-center gap-2 rounded-full transition-all duration-200 px-[10px] py-[5px] group-hover:bg-richblack-900">
                    <p>Become an Instructor</p>
                
                    {/*icon*/}
                    <FaArrowRight/>

                </div>
                <Link to="/calculator">Calculator</Link>
            </div>
                </Link>

            <div className="text-center text-4xl font-semibold mt-7"> 
                Empower your future With
                <HighlightText text={"Coding Skills"}/>
            </div>

            <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
                With our online coding courses, you can learn at your own pace, from anywhere in the world and get access of wealth  of resources , including hands-on project , quizzes and personaziled feedback from instructors. 
            </div>

            <div className="flex flex-row gap-7 mt-8 "> 
                <CTAButton active={true} linkto={"/signup"}
                >Learn more</CTAButton>

                <CTAButton active={false} linkto={"/login"}>Book a Demo</CTAButton>
            </div>

            <div className="shadow-blue-200 mx-3 my-12 shadow-[10px_-5px_50px_-5px]">
                <video width={900} height={500}   className="shadow-[20px_20px_rgba(255,255,255)]"
                loop
                muted
                autoPlay
                >
                 <source src={Banner} type="video/mp4"/>
                </video>

            </div>
            

            {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-pink"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
        {/* Explore Section */}
        <ExploreMore />
            </div>

            {/*Section 2*/}
          <div className="bg-pure-greys-5 text-richblack-700 ">

          <div className="homepage_bg h-[333px]">

          <div className="w-9/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">

           <div className="lg:h-[180px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">

               <CTAButton active={true} linkto={"/signup"}>
               <div className="flex flex-row gap-3 items-center">
                Explore Full Catalog
                <FaArrowRight/>
               </div>

               </CTAButton>

               <CTAButton active={false} linkto={"/signup"}> 

                 <div>
                  Learn more
                 </div>
               </CTAButton>
            </div>
              
          </div>

          </div>

          <div className="mx-auto w-9/12 max-w-maxContent flex flex-col items-center justify-between
          gap-7">

          <div className="flex flex-col lg:flex-row lg:gap-0 gap-6 mt-[95px] mb-10">

             <div className="text-4xl font-semibold lg:w-[50%]">
             Get the skills you need for a{" "}
             <HighlightText text={"job that is in demand."} />
             </div>

             <div className="flex flex-col items-start gap-10 lg:w-[50%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"} >
                <div className="">Learn More</div>
              </CTAButton>
            </div>

          </div>

          <TimeLineSection/>

            <LearningLanguageSection/>
          </div>

          
          </div>

            {/*Section 3*/}
           <div className="w-9/12 max-w-maxContent mx-auto flex-col items-center justify-between gap-8
           bg-richblack-900 text-white ">
           
           <InstructorSection/>

           {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
           </div>

           {/*Footer*/}
           
           <Footer/>
        </div>
    )
}
export default Home