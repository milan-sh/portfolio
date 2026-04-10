const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="w-full text-4xl text-center font-bebas font-bold text-secondary tracking-wider relative inline-block highlight">
      {children}
    </h1>
  );
};
export default Heading;
