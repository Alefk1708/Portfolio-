// app/client-wrapper.js
'use client';

import MemoizedParticles from "./componentes/MemoizedParticles";



export default function ClientWrapper({ children }) {
  return (
    <>
      <MemoizedParticles/>
      {children}
    </>
  );
}
