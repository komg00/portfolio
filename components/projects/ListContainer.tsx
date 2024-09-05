import React from 'react'

interface ListContainerProps {
  title: string;
}

export default function ListContainer({ title }: ListContainerProps) {
  return (
    <div className="flex items-center gap-1 text-blue underline font-normal">
      <svg className="h-6 w-6"  fill="rgba(255, 217, 70, 1)" viewBox="0 0 24 24" stroke="none">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
      </svg>
      <p>{title}</p>
    </div>
  )
}
