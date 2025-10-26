import React, { useState, useEffect } from "react";

const BlinkingText = () => {
  const fullText =
    "Increase your savings while lowering your bills by increasing your home’s energy efficiency.";
  const words = fullText.split(" ");

  const [displayedWords, setDisplayedWords] = useState([]);
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let interval;

    if (typing) {
      interval = setInterval(() => {
        setIndex((prev) => {
          if (prev < words.length) {
            setDisplayedWords(words.slice(0, prev + 1));
            return prev + 1;
          } else {
            clearInterval(interval);
            // Pause, then start deleting
            setTimeout(() => {
              setTyping(false);
            }, 1000); // pause 1s before deleting
            return prev;
          }
        });
      }, 300); // typing speed per word
    } else {
      interval = setInterval(() => {
        setIndex((prev) => {
          if (prev > 0) {
            setDisplayedWords(words.slice(0, prev - 1));
            return prev - 1;
          } else {
            clearInterval(interval);
            // Pause, then start typing again
            setTimeout(() => {
              setTyping(true);
            }, 500); // pause 0.5s before typing
            return prev;
          }
        });
      }, 150); // deleting speed
    }

    return () => clearInterval(interval);
  }, [typing, words]);

  return (
    <div className="flex justify-center mt-8 mb-3">
      <p className="text-center text-2xl sm:text-3xl md:text-4xl font-bold 
                     text-[#FF7300] px-6 py-3 rounded-2xl 
                    shadow-lg shadow-green-400/50 
                    transition-all duration-500 ease-in-out
                    max-w-4xl">
        {displayedWords.join(" ")}
      </p>
    </div>
  );
};

export default BlinkingText;
