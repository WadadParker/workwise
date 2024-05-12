"use client"
import React , {useState} from 'react'

const generateRandomColor=(index)=> {
    
    switch(index) {
        case 0 : return "#8277FF";
        case 1 : return "#D3445B";
        case 2 : return "#50BFA5";
        case 3: return "#a855f7";
        case 4: return "#F24E1E";
    }
}

const Expertise = () => {
    const devExp = ["Frontend","Backend","Fullstack","Devops","Mobile App"]
    const designExp = ["Graphic Design","UI/UX Design","Web Design","Illustration","Motion Graphics"]
    const contentExp = ["Blog Writing","Copywriting","Technical Writing","Creative Writing","SEO Content Writing"]
    const digitalExp = ["Social Media Marketing","SEO","Pay-Per-Click Advertising","Content Marketing","Email Marketing"]

    const [expArray,setExpArray] = useState([]);

    const toggleArray = (text) => {
        const found = expArray.find(item=>item==text)
        if(found)
        setExpArray(prev=>[...prev].filter(item=>item!==text))
        else
        setExpArray(prev=>[...prev,text])
    }

  return (
    <section className=' mx-auto'>
      <h1 className='text-3xl leading-10 font-medium text-center mt-10'>What is your Domain?</h1>
      <ul className='flex gap-x-10 mt-40 mb-36 pb-1'>
        {devExp.map((item,index)=>{
            const randomColor = generateRandomColor(index)
            return (
            <li key={index} 
            className={expArray.includes(item)
                ?"text-white rounded-md py-2 px-4 hover:cursor-pointer border border-transparent"
                :"bg-gray-200 text-black rounded-md py-2 px-4 hover:cursor-pointer border border-transparent hover:border-black"}
            onClick={()=>toggleArray(item)} 
            style={{ backgroundColor: expArray.includes(item) ? randomColor : "e5e7eb" }}>
                {item}
            </li>
        )})}
      </ul>
    </section>
  )
}

export default Expertise



