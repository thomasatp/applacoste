import React from 'react'

export default function Account({ color, className }) {
  return (
    <svg
      className={className}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M11.7 15.8999L3.2 9.89991C3.05 9.79991 3 9.64991 3 9.49991C3 9.39991 3.05 9.29991 3.1 9.19991C3.25 8.99991 3.6 8.94991 3.8 9.09991L12 14.8999L20.2 9.09991C20.4 8.94991 20.75 8.99991 20.9 9.19991C21.05 9.39991 21 9.74991 20.8 9.89991L12.3 15.8999C12.1 16.0499 11.9 16.0499 11.7 15.8999Z' />
    </svg>
  )
}
