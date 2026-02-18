'use client';
import React, { createContext, useState } from 'react'
import FilteringWrapper from './FilteringWrapper';
import FilterToggleButton from './FilterToggleButton';

export const FilterContext = createContext(null)

export default function FilterProvider({children}) {
    const [open, setOpen] = useState(false)
  return (
    <FilterContext.Provider value={{ open, setOpen }}>
        <FilterToggleButton/>
        {children}
        <FilteringWrapper/>
    </FilterContext.Provider>
  )
}
