import React from "react";

type LeftWrapperProps = {
  children: React.ReactNode;
};

export default function LeftWrapper({ children }: LeftWrapperProps) {
  return (
    <div className="w-full h-5/6 my-5 grid gap-4 bg-white py-6 px-4 border border-border-content rounded-2xl">
      {children}
    </div>
  );
}
