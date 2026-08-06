export default function ClientWrapper({ children }) {
  return (
    <>
      <div className="ambient-background" aria-hidden="true" />
      {children}
    </>
  );
}
