"use client"
import { useState } from "react"

const FreelancerCard = ({freelancer}) => {
    const [shortListed,setShortlisted] = useState()
    return (
        <li key={freelancer} className="p-4 border space-y-2 rounded-xl bg-white">
                            <header className="flex justify-between">
                                <img src="https://www.shutterstock.com/shutterstock/photos/2161819863/display_1500/stock-photo-businessman-using-laptop-computer-in-office-happy-middle-aged-man-entrepreneur-small-business-2161819863.jpg" className=" size-16 rounded-full object-cover" />
                                <aside className="flex flex-col items-center">
                                    <h1 className=" text-3xl">85%</h1>
                                    <small>Match Score</small>
                                </aside>
                            </header>
                            <main>
                                <h1 className=" font-medium">Wadad Parker</h1>
                                <h2 className="text-sm">Front-end Developer</h2>
                            </main>
                            <section className="flex justify-between">
                                <aside className="flex items-center gap-x-1">
                                    <p>Rating: 4.5 </p>
                                    <svg width="16" height="16" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mt-1">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC100"/>
                                    </svg>
                                </aside>
                                <aside className="flex items-center gap-x-1">
                                    <p className="gradient-text text-sm font-medium">Super Stars:</p>
                                    <p className="gradient-text text-sm font-medium">10</p>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="url(#paint0_linear_998_2498)"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_998_2498" x1="12" y1="6" x2="0" y2="6" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.225" stop-color="#407BFF"/>
                                            <stop offset="0.83" stop-color="#FF0202"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </aside>
                            </section>
                            <p className="text-sm font-medium">Rs 150/hr</p>
                            <section className="flex justify-between items-center">
                                <button className=" rounded-xl text-white border px-3 py-0.5 transition-all ease-linear border-black bg-black hover:cursor-pointer hover:text-black hover:bg-white text-xs font-bold" onClick={()=>setShortlisted(prev=>!prev)}>{shortListed?"Shortlisted!":"Shortlist"}</button>
                                <button className=" rounded-xl text-white border px-3 py-0.5 transition-all ease-linear border-highlight-green bg-highlight-green hover:cursor-pointer hover:text-highlight-green hover:bg-white text-xs font-bold">Hire Now</button>
                            </section>
                        </li>
    )
}

export default function Freelance() {
    return (
        <div className="flex bg-bg justify-center items-start grow">
            <main className="w-2/3 h-full space-y-10">
                <header className="bg-white px-5 py-10 rounded-xl mt-5 flex justify-between">
                    <div className=" w-24 h-fit flex gap-x-2 mr-40">
                        <aside className=" w-12 rounded-bl-3xl bg-highlight-blue h-16" >
                            <div className=" -mt-[50%] size-12 bg-highlight-red rounded-full"></div>
                        </aside>
                        <aside className=" w-12 rounded-tr-3xl bg-highlight-blue h-16 flex items-end" >
                            <div className=" -mb-[50%] size-12 bg-highlight-red rounded-full"></div>
                        </aside>
                    </div>
                    <h1 className=" text-3xl mr-10">We found freelancers with average match score of</h1>
                    <h1 className=" text-6xl font-medium">85%</h1>
                </header>
                <ul className="grid grid-cols-3 gap-y-6 gap-x-10 bg-bg h-[50vh] overflow-y-scroll">
                    {[1,2,3,4,5].map(freelancer=>(
                        <FreelancerCard freelancer={freelancer} />
                    ))}
                </ul>
            </main>
        </div>
    )
}