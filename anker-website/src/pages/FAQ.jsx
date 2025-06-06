import faqData from '../utils/faq/faq.json'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from 'gsap/SplitText'
import { useState } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(SplitText, ScrollTrigger)
const FAQ = () => {
    const categories = Object.entries(faqData.faq)
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
      setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    }


    useGSAP(() => {
        let split = SplitText.create(".header",{
          type: "chars",
        })
    
        document.fonts.ready.then(() => {
          gsap.from(split.chars, {
            y: 100,
            autoAlpha: 0,
            stagger: {
              amount: 0.5,
              from: "random"
            },
          })
    
        })
    },[])

    return (
        <div className='flex flex-col justify-center items-center text-center m-4'>
          <h1 className='header text-4xl md:text-7xl xl:text-9xl mb-8 font-bold'>Häufige Fragen</h1>
          {categories.map(([categoryName, items], catIndex) => (
            <div className='md:max-w-[50dvw] w-auto' key={categoryName}>
              <h2 className='text-2xl md:text-4xl xl:text-7xl mt-10 mb-2 font-bold'>{categoryName}</h2>
              <hr/>

              {items.map((item, itemIndex) => {
                const combinedIndex = `${catIndex}-${itemIndex}`;
                return (
                  <div key={combinedIndex}>
                    <h3
                      onClick={() => handleToggle(combinedIndex)}
                      className='md:text-3xl xl:text-4xl font-bold m-4 cursor-pointer hover:animate-pulse bg-[#1B2A30] border-white text-white rounded-md p-4'
                    >
                      {item.question}
                    </h3>
                    <p className={openIndex === combinedIndex ? "block" : "hidden"}>
                      {item.answer}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      );
    }

export default FAQ