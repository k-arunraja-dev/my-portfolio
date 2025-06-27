import { useState, useEffect } from "react"

export default function Home () {
    const fullText = "Software Developer";
    const [visibleText, setVisibleText] = useState("");

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
        // ✅ Only update if still within bounds
        if (index < fullText.length) {
            console.log("Index:", index, "Char:", fullText[index]);

            setVisibleText(prev => prev + fullText[index]);
            index++;
        } else {
            clearInterval(interval);
        }
        }, 150);

        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <div>
            <div className='flex flex-col gap-6 py-28 px-3 max-w-6xl mx-auto'>
                <p className='text-slate-500'>Hello,</p>
                <h1 className='text-slate-500'>I'm 
                    <span className='text-slate-700'>Arunraja{visibleText}</span>
                    <br />
                </h1>
                <div className="text-3xl font-bold text-gray-800">
                {
                    visibleText.split("").map((char, i) => (
                        <span key = {i} className="inline-block mr-1">
                            {char}
                        </span>
                    ))
                }
                </div>
            </div>
        </div>
    );
}