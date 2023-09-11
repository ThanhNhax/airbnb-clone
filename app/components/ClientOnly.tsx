'use client'
import React, { useState, useEffect } from 'react';

interface ClientOnlyProps{
    children: React.ReactNode
}

const ClientOnly:React.FC<ClientOnlyProps> = ({children}) => {
  const [hasMuonted, setHasMuonted] = useState(false);
  useEffect(() => {
    setHasMuonted(true);
  }, []);
  if (!hasMuonted) return null;
  return <>
    {children}
  </>;
};

export default ClientOnly;
