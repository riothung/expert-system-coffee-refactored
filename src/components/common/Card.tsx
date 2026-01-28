import React from "react";

interface CardProps {
  title: string;
  imageSrc?: string;
  children: React.ReactNode;
}

const Card = ({ title, imageSrc, children }: CardProps) => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 text-center overflow-hidden">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {imageSrc && <img src={imageSrc} alt={title} className="mx-auto mb-4 rounded-2xl overflow-hidden" />}
      <div className="text-gray-600">{children}</div>
    </div>
  );
};

export default Card;
