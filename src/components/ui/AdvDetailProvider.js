'use client';
import React, { createContext, useState } from 'react'

export const AdvDetailContext = createContext(null)

export default function AdvDetailProvider({ children }) {
    const [featuresType, setFeaturesType] = useState('recreational') // recreational / transportation
  return (
    <AdvDetailContext.Provider value={{ featuresType, setFeaturesType }}>{children}</AdvDetailContext.Provider>
  )
}
