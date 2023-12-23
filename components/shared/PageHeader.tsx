// ./frontend/src/app/[lang]/components/PageHeader.tsx

import React from "react";

interface PageHeaderProps {
  heading: string,
}

export default function PageHeader({ heading } : PageHeaderProps) {
  return (
    <div className="w-full text-center">
    <h2 className="text-secondaryColor uppercase text-2xl lg:text-3xl font-bold font-heading">{heading}</h2>
  </div>
  );
}