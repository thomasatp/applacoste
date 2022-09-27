import React, { useState, useEffect } from 'react'
import Hero from '../components/plp/Hero'
import FilterBar from '../components/plp/FilterBar'
import Grid from '../components/plp/Grid'
import Tile from '../components/plp/Tile'
import { polos } from './../data'

function Plp() {
  const [filters, setFilters] = useState(false)
  const [productView, setProductView] = useState(false)
  const savedGrid = localStorage.getItem('gridValue')
  const [gridValue, setGridValue] = useState(savedGrid ? JSON.parse(savedGrid) : ['50'])
  useEffect(() => {
    localStorage.setItem('gridValue', JSON.stringify(gridValue))
  }, [gridValue])

  return (
    <>
      <Hero
        title='Men’s polo shirts'
        desc="Want to meet an icon? This is ours. Created in 1933, the men's polo shirt blends comfort with style to set the tone of a sporty-chic silhouette. Knitted from Petit Piqué, it’s a classic to display. Crocodile at heart, always."
      />
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        productView={productView}
        setProductView={setProductView}
        gridValue={gridValue}
        setGridValue={setGridValue}
      />
      <Grid filters={filters} productView={productView} gridValue={gridValue}>
        {polos.map(polo => (
          <Tile
            productView={productView}
            gridValue={gridValue}
            src={polo.image}
            title={polo.title}
            price={polo.price}
            productColors={polo.colors}
            tag={polo.tag}
          />
        ))}
      </Grid>
    </>
  )
}

export default Plp
