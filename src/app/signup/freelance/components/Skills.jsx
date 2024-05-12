"use client"
import React , {useState} from 'react'

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

const Skills = () => {
    const devSkills = ["HTML","CSS","JavaScript","React.js","Flutter","SQL","AWS","Kotlin","Nextjs","PHP"]
    const designSkills = ["Adobe Photoshop","Adobe Illustrator","Adobe XD","Sketch","Figma","InVision","Zeplin","Canva","Typography","Branding"]
    const contentSkills = ["SEO Optimization","Blogging Platforms ","Copy Editing","Proofreading","Research Skills","Journalism","Storytelling","Grammar Mastery","Social Media Writing","Technical Writing"]
    const digitalSkills = ["Google Analytics","Social Media Management Tools","SEMrush","CMS","Email Marketing Platforms","PPC Platforms","SEO Tools","CRO","Digital Advertising Strategy","Influencer Marketing"]

    const [skillsArray,setSkillsArray] = useState([]);

    const toggleArray = (text) => {
        const found = skillsArray.find(item=>item==text)
        if(found)
        setSkillsArray(prev=>[...prev].filter(item=>item!==text))
        else
        setSkillsArray(prev=>[...prev,text])
    }

  return (
    <section className=' mx-auto'>
      <h1 className='text-3xl leading-10 font-medium text-center mt-10'>Select your Skills {"(Max 10)"}</h1>
      <ul className='grid grid-cols-[auto,auto,auto,auto,auto] gap-x-10 gap-y-5 mt-40 mb-16 pb-[22px]'>
        {devSkills.map((item,index)=>{
            const randomColor = generateRandomColor(index)
            return (
            <li key={index} 
            className={skillsArray.includes(item)
                ?"text-white rounded-md py-2 px-4 hover:cursor-pointer border border-transparent text-center"
                :"bg-gray-200 text-black rounded-md py-2 px-4 hover:cursor-pointer border border-transparent hover:border-black text-center"}
            onClick={()=>toggleArray(item)}
            style={{ backgroundColor: skillsArray.includes(item) ? randomColor : "#e5e7eb" }}>
                {item}
            </li>
        )})}
      </ul>
    </section>
  )
}

export default Skills



