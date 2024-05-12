"use client"
import React from 'react'
import { useFreelance } from '../FreelanceContext';

const generateRandomColor=(index)=> {
    
    switch(index) {
        case 0 : return "#8277FF";
        case 1 : return "#D3445B";
        case 2 : return "#50BFA5";
        case 3: return "#a855f7";
        case 4: return "#F24E1E";
        case 5 : return "#8277FF";
        case 6 : return "#D3445B";
        case 7 : return "#50BFA5";
        case 8: return "#a855f7";
        case 9: return "#F24E1E";
    }
}

const selectSkilssOptions = (domain) => {
    const devSkills = ["HTML","CSS","JavaScript","React.js","Flutter","SQL","AWS","Kotlin","Nextjs","PHP"]
    const designSkills = ["Adobe Photoshop","Adobe Illustrator","Adobe XD","Sketch","Figma","InVision","Zeplin","Canva","Typography","Branding"]
    const contentSkills = ["SEO Optimization","Blogging Platforms ","Copy Editing","Proofreading","Research Skills","Journalism","Storytelling","Grammar Mastery","Social Media Writing","Technical Writing"]
    const digitalSkills = ["Google Analytics","Social Media Management Tools","SEMrush","CMS","Email Marketing Platforms","PPC Platforms","SEO Tools","CRO","Digital Advertising Strategy","Influencer Marketing"]

    switch(domain) {
        case "Developer": return devSkills;
        case "Designer": return designSkills;
        case "Content Writer": return contentSkills;
        case "Digital Marketing": return digitalSkills;
        default: return devSkills;
    }
}

const Skills = () => {

    const {state:{skills,domain},dispatch} = useFreelance();
    const  skillOptions = selectSkilssOptions(domain);

    const toggleArray = (text) => {
        const found = skills.find(item=>item==text)
        if(found){
        const filteredArray = skills.filter(item=>item!==text)
        dispatch({type:"INPUT_FIELDS",payload:filteredArray,inputField:"skills"})
        }
        else
        dispatch({type:"INPUT_FIELDS",payload:[...skills,text],inputField:"skills"})
    }

  return (
    <section className=' mx-auto'>
      <h1 className='text-3xl leading-10 font-medium text-center mt-10'>Select your Skills {"(Max 10)"}</h1>
      <ul className='grid grid-cols-[auto,auto,auto,auto,auto] gap-x-10 gap-y-5 mt-40 mb-16 pb-[22px]'>
        {skillOptions.map((item,index)=>{
            const randomColor = generateRandomColor(index)
            return (
            <li key={index} 
            className={skills.includes(item)
                ?"text-white rounded-md py-2 px-4 hover:cursor-pointer border border-transparent text-center"
                :"bg-gray-200 text-black rounded-md py-2 px-4 hover:cursor-pointer border border-transparent hover:border-black text-center"}
            onClick={()=>toggleArray(item)}
            style={{ backgroundColor: skills.includes(item) ? randomColor : "#e5e7eb" }}>
                {item}
            </li>
        )})}
      </ul>
    </section>
  )
}

export default Skills



