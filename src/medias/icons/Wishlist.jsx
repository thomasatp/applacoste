import React, { useState } from 'react'

export default function Wishlist({ color }) {
  const [selected, setSelected] = useState(false)
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      onClick={() => setSelected(!selected)}
      stroke={selected ? 'transparent' : `${color}`}
      fill={selected ? `${color}` : 'transparent'}
      style={{ position: 'absolute', right: '1.2rem', top: '1.2rem', mixBlendMode: 'difference' }}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M16.47 3C14.675 3 13.03 3.82 12 5.175C10.97 3.82 9.32 3 7.53 3C4.48 3 2 5.37 2 8.28C2 14.195 11.32 20.64 11.72 20.91C11.725 20.915 11.735 20.915 11.74 20.92C11.77 20.935 11.795 20.95 11.825 20.96C11.84 20.965 11.85 20.97 11.865 20.975C11.91 20.99 11.95 21 11.995 21H12H12.005C12.05 21 12.09 20.995 12.13 20.98C12.145 20.975 12.155 20.97 12.17 20.965C12.2 20.955 12.23 20.94 12.255 20.925C12.26 20.92 12.27 20.92 12.275 20.915C12.68 20.64 22 14.195 22 8.28C22 5.37 19.52 3 16.47 3Z' />
    </svg>
  )
}
