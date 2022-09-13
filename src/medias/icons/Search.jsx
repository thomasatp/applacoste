import React from 'react'

export default function Search({ color, className }) {
  return (
    <svg
      className={className}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M21.85 21.15L16.85 16.15C18.2 14.65 19 12.7 19 10.5C19 5.8 15.2 2 10.5 2C5.8 2 2 5.8 2 10.5C2 15.2 5.8 19 10.5 19C12.65 19 14.65 18.2 16.15 16.85L21.15 21.85C21.25 21.95 21.4 22 21.5 22C21.65 22 21.75 21.95 21.85 21.85C22.05 21.65 22.05 21.35 21.85 21.15ZM10.5 18C6.35 18 3 14.65 3 10.5C3 6.35 6.35 3 10.5 3C14.65 3 18 6.35 18 10.5C18 14.65 14.65 18 10.5 18Z' />
    </svg>
  )
}
