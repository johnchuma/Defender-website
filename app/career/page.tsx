
"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import CustomButton from "../(components)/customButton";
import { jobOffers, Testimonials, whyJoinUs } from "../utils/constants";
import { motion } from "framer-motion";
import { FaGooglePlay } from "react-icons/fa";

export default function Career() {
    const jobsRef = useRef<HTMLDivElement>(null);
    const [showVideo, setShowVideo] = useState(false);

    const handleButtonClick = () => {
        setShowVideo(true);
      };

return (

    <div className="mb-20">
        <section className="bg-blushPinkColor pb-5 pt-14 2xl:pb-0 2xl:pt-0">
        <div className="container mx-auto flex min-h-[50dvh] flex-col items-center justify-center gap-y-6 px-4 text-center md:px-0">
          <div className="z-20 flex flex-col gap-y-6">
            <div className="text-2xl font-semibold leading-tight text-[#292929] sm:text-3xl md:text-6xl">
            Careers at Defender
            </div>
            <div className="text-lg text-[#525252]">
            Join Defender and help the growth of a new generation of youths across Africa.
            </div>

            <CustomButton
              btntext="See Job Openings"
              onClick={() => jobsRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="px-12 text-base font-medium md:px-20"
            />
          </div>
        </div>
      </section>
      <div className="w-9/12 mx-auto space-y-16 pt-10">
      <section>
      <div className="space-y-5">
        <h1 className="text-textColor font-bold text-center text-lg">
        Why Join Us
        </h1>
        <p className="text-mutedText  text-center">In addition to a competitive world of today, here're a few resources we offer<br /> to help our team excel.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {whyJoinUs.map((item:any, index:any) => {
            return (
              <div
                className="flex flex-col items-start p-10 rounded-lg space-y-6 shadow-md"
                key={index}
              >
                <div className="inline-flex items-start justify-center p-3 border-2 border-[#E0E0E0] rounded-lg">
                  <div className="">{item.icon}</div>
                </div>
                <div className="text-textColor font-semibold text-start">
                  {item.title}
                </div>
                <div className="text-textColor text-start">
                {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </section>

      <section>
        <div className="space-y-5">
        <h1 className="text-textColor font-bold text-center text-lg">
        Employee Testimonials
        </h1>
        <div className="space-x-5">
        <div className="grid grid-cols-12 gap-10">
        {Testimonials.map((item:any, index:any) => {
            return (
        <div className="relative col-span-4 w-full h-72" key={index}>
            <Image 
                src={item.image} 
                height={2000} 
                width={2000} 
                className="w-full h-full object-cover rounded-lg" 
                alt="Testimonials" 
            />

            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-red-600 rounded-full"
                onClick={handleButtonClick}
                animate={{
                boxShadow: [
                    "0px 0px 0px 4px rgba(255, 0, 0, 0.9)",
                    "0px 0px 0px 10px rgba(255, 0, 0, 0.6)",
                    "0px 0px 0px 18px rgba(255, 0, 0, 0.3)",
                    "0px 0px 0px 25px rgba(255, 0, 0, 0.1)",
                ],
                }}
                transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                }}
            >
                <FaGooglePlay size={20} className="text-white hover:scale-125" />
            </motion.div>

            <div className="absolute bottom-5 left-5 text-left">
                <p className="text-white font-semibold">{item.name}</p>
                <p className="text-white">{item.position}</p>
            </div>
            {showVideo && (
                <div 
                    className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-[rgba(0,0,0,0.4)]"
                    onClick={() => setShowVideo(false)}
                >
                    <div 
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                    >
                    <iframe 
                        width="660" 
                        height="415" 
                        src={item.videosrc}
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                    <button 
                        onClick={() => setShowVideo(false)} 
                        className="absolute top-2 right-2 text-white bg-red-600 p-2 rounded-full hover:bg-red-700">
                        X
                    </button>
                    </div>
                </div>
                )}
             </div>
                   );
                })}
             </div>
           </div>
        </div>
      </section>
      <section>
      <div className="space-y-5">
        <h1 className="text-textColor font-bold text-center text-lg">
            Application Process
        </h1>
        <div className="space-y-16">
          <div className="grid grid-cols-12 gap-20 items-end">
            <div className="col-span-6 pr-12 pb-24">
              <h4 className="text-xl font-semibold text-black">Application Submission</h4>
              <p className="text-mutedText">
              Begin your journey by visiting our Careers page to explore current job openings. Carefully read through the job descriptions to find a position that aligns with your skills and interests. <br />
              When you`re ready, submit your application through our online portal, including your updated resume and a tailored cover letter that highlights your relevant experience, skills, and reasons for wanting to join our team. We appreciate candidates who take the time to personalize their applications
              </p>
            </div>
            <div className="col-span-6 flex items-top -translate-x-20 ">
              <div>
              <Image src="/arrow_pink.svg" height={2000} width={150} className="h-40" alt="Watch" />
              </div>
              <div className="size-6 flex justify-center items-center text-sm rounded-full bg-red-200">1</div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-6 flex items-top translate-x-80">
          <div className="size-6 flex justify-center items-center text-sm rounded-full bg-sky-300">2</div>
              <div>
              <Image src="/arrow_blue.svg" height={2000} width={150} className="h-40" alt="Watch" />
              </div>
            </div>
            <div className="col-span-6 pb-24">
              <h4 className="text-xl font-semibold text-black">Initial Screening</h4>
              <p className="text-mutedText">      
                After submission, our HR team will conduct a preliminary review of your application. This involves assessing your qualifications, experience, and how well they match the requirements of the role.<br />
                If your profile stands out, we will reach out to you to schedule an initial screening interview, which typically takes place via phone or video call. This step is designed to gather more information about your background and clarify any questions we may have.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-20 items-end">
            <div className="col-span-6 pb-24 pr-24">
              <h4 className="text-xl font-semibold text-black">Assessment</h4>
              <p className="text-mutedText">
                Depending on the role you are applying for, you may be required to complete an assessment or task relevant to the position. This could include a skills test, a case study, or a creative assignment that showcases your expertise. <br />
                The assessment is an opportunity for you to demonstrate your abilities and for us to gauge how well you can perform the tasks associated with the job.</p>
            </div>
            <div className="col-span-6 flex items-top -translate-x-20 ">
              <div>
              <Image src="/arrow_pink.svg" height={2000} width={150} className="h-40" alt="Watch" />
              </div>
              <div className="size-6 flex justify-center items-center text-sm rounded-full bg-red-200">3</div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-6 flex items-top translate-x-80">
          <div className="size-6 flex justify-center items-center text-sm rounded-full bg-sky-300">4</div>
              <div>
              <Image src="/arrow_blue.svg" height={2000} width={150} className="h-40" alt="Watch" />
              </div>
            </div>
            <div className="col-span-6 pb-24">
              <h4 className="text-xl font-semibold text-black">In-Depth Interviews</h4>
              <p className="text-mutedText">
                Candidates who successfully pass the initial screening and assessment will be invited to participate in in-depth interviews with team members and managers.<br /> 
                This stage often includes multiple rounds of interviews, focusing on your experience, problem-solving abilities, and cultural fit within our organization. We encourage open dialogue during this process, allowing you to ask questions and learn more about our company values, team dynamics, and expectations.
                </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-20 items-end">
            <div className="col-span-6 pb-24 pr-24">
              <h4 className="text-xl font-semibold text-black">Final Review</h4>
              <p className="text-mutedText">          
                After the interview process, our hiring team will conduct a comprehensive final review of all candidates. This review considers your performance during interviews, assessment results, and overall fit for our team. <br />
                We aim to select individuals who not only possess the necessary skills but also share our commitment to innovation, safety, and customer service</p>
            </div>
            <div className="col-span-6 flex items-top -translate-x-20 ">
              <div>
              <Image src="/arrow_pink.svg" height={2000} width={150} className="h-40" alt="Watch" />
              </div>
              <div className="size-6 flex justify-center items-center text-sm rounded-full bg-red-200">5</div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-6">
                {" "} 
            </div>
            <div className="col-span-6 pb-24">
              <h4 className="text-xl font-semibold text-black">Onboarding</h4>
              <p className="text-mutedText">        
                If you successfully pass the final review, we will extend a formal job offer, outlining the details of your position, salary, benefits, and other terms of employment. <br />
                Upon acceptance of the offer, our onboarding team will guide you through the onboarding process, ensuring you have the resources and support needed to thrive in your new role. This includes training, introductions to your new team, and access to company tools and resources.</p>
            </div>
     
          </div>
        </div>
        </div>
      </section>
      <section ref={jobsRef} className="py-2">
      <div className="space-y-3">
        <h1 className="text-textColor font-bold text-center text-lg">
        Current Job Openings
        </h1>
        <p className="text-mutedText text-center ">Come join the team!</p>
        <div className="space-y-5">
          {jobOffers.map((item:any, index:any) => {
            return (
              <div
                className="w-full p-14 flex shadow-lg shadow-[#E0E0E0] rounded-lg space-x-16"
                key={index}
              >
                <div className="w-9/12 flex flex-col justify-start items-start space-y-5">
                <h5 className="text-textColor font-semibold text-lg">{item.title}</h5>
                <p className="text-black">{item.description}</p>
                <div className="flex space-x-7">
                    <p>{item.prospects}</p>
                    <p>{"."}</p>
                    <p>{item.duration}</p>
                    <p>{"."}</p>
                    <p>{item.location}</p>
                </div>
                </div>
                <div className="w-3/12 flex flex-col justify-center items-center space-y-5">
                    <CustomButton btntext="Apply here"/>
                    <p className="mutedText text-sm">Status: Ongoing</p>
                </div>
               
              </div>
            );
          })}
        </div>
      </div>
      </section>
        </div>
     
</div>
);
};