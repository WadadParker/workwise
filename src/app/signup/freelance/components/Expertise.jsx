"use client"
import React , {useState} from 'react'
import { useFreelance } from '../FreelanceContext';

const generateRandomColor=(index)=> {
    
    switch(index) {
        case 0 : return "#8277FF";
        case 1 : return "#D3445B";
        case 2 : return "#50BFA5";
        case 3: return "#a855f7";
        case 4: return "#F24E1E";
    }
}

const selectExpertiseOptions = (domain) => {
    const devExp = ["Frontend","Backend","Fullstack","Devops","Mobile App"]
    const designExp = ["Graphic Design","UI/UX Design","Web Design","Illustration","Motion Graphics"]
    const contentExp = ["Blog Writing","Copywriting","Technical Writing","Creative Writing","SEO Content Writing"]
    const digitalExp = ["Social Media Marketing","SEO","Pay-Per-Click Advertising","Content Marketing","Email Marketing"]

    switch(domain) {
        case "Developer": return devExp;
        case "Designer": return designExp;
        case "Content Writer": return contentExp;
        case "Digital Marketing": return digitalExp;
        default: return devExp;
    }
}

const Expertise = () => {

    const {state:{domain,expertise},dispatch} = useFreelance();
    const expertiseOptions = selectExpertiseOptions(domain);

    const toggleArray = (text) => {
        const found = expertise.find(item=>item==text)
        if(found)
        {
            const filteredArray = [...expertise].filter(item=>item!==text)
        dispatch({type:"INPUT_FIELDS",payload:filteredArray,inputField:"expertise"})
        }
        else
        dispatch({type:"INPUT_FIELDS",payload:[...expertise,text],inputField:"expertise"})
    }

  return (
    <section className=' mx-auto'>
      <h1 className='text-3xl leading-10 font-medium text-center mt-10'>What are your Expertise?</h1>
      <ul className='flex gap-x-10 mt-40 mb-36 pb-1'>
        {expertiseOptions.map((item,index)=>{
            const randomColor = generateRandomColor(index)
            return (
            <li key={index} 
            className={expertise.includes(item)
                ?"text-white rounded-md py-2 px-4 hover:cursor-pointer border border-transparent"
                :"bg-gray-200 text-black rounded-md py-2 px-4 hover:cursor-pointer border border-transparent hover:border-black"}
            onClick={()=>toggleArray(item)} 
            style={{ backgroundColor: expertise.includes(item) ? randomColor : "#e5e7eb" }}>
                {item}
            </li>
        )})}
      </ul>
    </section>
  )
}

export default Expertise



