import React from 'react'

export default function Grid2({ color, className, onClick, opacity }) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
      style={{ opacity: opacity, transition: 'ease 0.4s', cursor: 'pointer' }}
    >
      <path d='M9.5 2H3.5C2.675 2 2 2.675 2 3.5V20.5C2 21.325 2.675 22 3.5 22H9.5C10.325 22 11 21.325 11 20.5V3.5C11 2.675 10.325 2 9.5 2ZM10 20.5C10 20.775 9.775 21 9.5 21H3.5C3.225 21 3 20.775 3 20.5V3.5C3 3.225 3.225 3 3.5 3H9.5C9.775 3 10 3.225 10 3.5V20.5ZM20.5 2H14.5C13.675 2 13 2.675 13 3.5V20.5C13 21.325 13.675 22 14.5 22H20.5C21.325 22 22 21.325 22 20.5V3.5C22 2.675 21.325 2 20.5 2ZM21 20.5C21 20.775 20.775 21 20.5 21H14.5C14.225 21 14 20.775 14 20.5V3.5C14 3.225 14.225 3 14.5 3H20.5C20.775 3 21 3.225 21 3.5V20.5Z' />
    </svg>
  )
}
