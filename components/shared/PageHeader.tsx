// ./frontend/src/app/[lang]/components/PageHeader.tsx

import React from "react";

interface PageHeaderProps {
  heading: string,
  text?: string,
}

export default function PageHeader({ heading, text } : PageHeaderProps) {
  return (
    <div className="w-full text-center">
    {/* { text && <span className="text-secondaryColor font-bold">{text}</span> } */}
    <h2 className="text-secondaryColor text-xl my-4 lg:text-3xl font-bold font-heading">{heading}</h2>
  </div>
  );
}