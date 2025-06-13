import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Don't forget this import!
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FAQ = () => {
    const { t } = useTranslation(); // Initialize the translation hook
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    useGSAP(() => {
        let split = SplitText.create(".header", {
            type: "chars",
        });

        document.fonts.ready.then(() => {
            gsap.from(split.chars, {
                y: 100,
                autoAlpha: 0,
                stagger: {
                    amount: 0.5,
                    from: "random"
                },
            });
        });
    }, []);

    const faqCategories = [
        { headerKeyPart: '1', prefix: 'General', count: 5 },
        { headerKeyPart: '2', prefix: 'Tattoo', count: 7 },
        { headerKeyPart: '3', prefix: 'TattooCare', count: 5 },
        { headerKeyPart: '4', prefix: 'Piercing', count: 6 },
        { headerKeyPart: '5', prefix: 'PiercingCare', count: 5 },
        { headerKeyPart: '6', prefix: 'Jewellery', count: 2 },
        { headerKeyPart: '7', prefix: 'Safety', count: 1 },
        { headerKeyPart: '8', prefix: 'Specials', count: 1 }
    ];

    return (
        <div className='flex flex-col justify-center items-center text-center m-4'>
            <h1 className='header text-4xl md:text-7xl xl:text-9xl mb-8 font-bold'>{t('faq.header')}</h1>

            {faqCategories.map((category, catIndex) => (
                <div className='md:max-w-[50dvw] w-auto' key={category.prefix}>
                    <h2 className='text-2xl md:text-4xl xl:text-7xl mt-10 mb-2 font-bold'>
                        {t(`faq.subHeader${category.headerKeyPart}`)}
                    </h2>
                    <hr/>
                    {[...Array(category.count)].map((_, questionIndex) => {
                        const questionNum = questionIndex + 1; 
                        const questionKey = `faq.question${category.prefix}${questionNum}`;
                        const answerKey = `faq.answer${category.prefix}${questionNum}`;
                        const combinedIndex = `${category.prefix}-${questionNum}`; 
                        const questionText = t(questionKey);
                        const answerText = t(answerKey);

                        if (!questionText || questionText === questionKey) {
                            return null;
                        }

                        return (
                            <div key={combinedIndex}>
                                <h3
                                    onClick={() => handleToggle(combinedIndex)}
                                    className='md:text-3xl xl:text-4xl font-bold m-4 cursor-pointer hover:animate-pulse bg-[#1B2A30] border-white text-white rounded-md p-4'
                                >
                                    {questionText}
                                </h3>
                                <p className={`text-md md:text-xl xl:text-2xl mt-2 mb-4 p-4 text-left ${openIndex === combinedIndex ? "block" : "hidden"}`}>
                                    {answerText}
                                </p>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default FAQ;