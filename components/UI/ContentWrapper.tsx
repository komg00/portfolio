import React from "react";

type ContentWrapperProps = {
  children: React.ReactNode;
};

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <div className="w-full h-5/6 my-5 py-6 px-7 border border-border-content bg-white rounded-2xl">
      {children}
    </div>
  );
}
