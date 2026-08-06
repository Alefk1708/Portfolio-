import OptimizedParticles from "./componentes/OptimizedParticles";

export default function ClientWrapper({ children }) {
  return (
    <>
      <div className="ambient-background" aria-hidden="true" />
      <OptimizedParticles />
      {children}
    </>
  );
}
