"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const feedbacks = [
  {
    text: "Escribe donde sea y como sea; va por ahí apuntando ideas en una libreta para crear maravillosas historias que plasma en sus obras.",
    user: "NVyNovelas",
  },
  {
    text: "El ensayo (El Color Púrpura, Persépolis y la Vida de Adèle.) de Ligia Urroz hace un recorrido a través de un análisis de obras realizadas por mujeres que lucharon por proyectar su visión del mundo.",
    user: "Rolling Stone",
  },
];

export default function UserFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextFeedback = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }
  };

  const prevFeedback = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <section className="py-20 md:py-40 bg-gradient-to-b from-[#D1E2EF] to-white relative">
      <div className="container mx-auto mt-20 md:mt-40 px-4">
        <div className="flex justify-center mb-10">
          <Quote size={90} className="text-gray-500" />
        </div>
        <div className="flex items-center justify-center gap-6 md:gap-10">
          <button
            onClick={prevFeedback}
            className="p-2 md:p-2 md:mr-10  hover:bg-gray-100 rounded-full transition-colors "
            aria-label="Previous feedback"
          >
            <ChevronLeft size={50} className="text-[#9e9e9e]" />
          </button>

          <div className="w-[80%] md:w-[50%] text-center overflow-hidden relative">
            <p
              className={`text-lg md:text-xl italic transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
              aria-live="polite"
            >
              &quot;{feedbacks[currentIndex].text}&quot;
            </p>
            <p
              className={`text-sm text-gray-600 mt-4 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              - {feedbacks[currentIndex].user}
            </p>
          </div>
          <button
            onClick={nextFeedback}
            className="p-2 md:p-2 md:ml-10 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Next feedback"
          >
            <ChevronRight size={50} className="text-[#9e9e9e]" />
          </button>
        </div>
      </div>
    </section>
  );
}
