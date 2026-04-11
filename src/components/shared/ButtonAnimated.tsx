import { Button } from "../retroui/Button";

type ButtonAnimatedProps = {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonAnimated = ({
  children,
  className,
  bgColor,
  ...props
}: ButtonAnimatedProps) => {
  return (
    <div className="relative group">
      {/* Background layer */}
      <div
        className={`absolute inset-0 ${
          bgColor || "bg-yellow-400"
        } border-[2px] sm:border-[3px] border-black translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 sm:group-hover:translate-x-1 sm:group-hover:translate-y-1 rounded-md`}
      />

      {/* Main button */}
      <Button
        {...props}
        variant="ghost"
        className={`relative border-[2px] sm:border-[3px] border-black bg-white text-black hover:bg-white hover:text-black font-heading text-base sm:text-lg 2xl:text-xl font-bold transition-transform group-hover:translate-x-[-0.5px] group-hover:translate-y-[-0.5px] sm:group-hover:translate-x-1 sm:group-hover:translate-y-1 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 h-auto rounded-md ${className}`}
      >
        {children}
      </Button>
    </div>
  );
};

export default ButtonAnimated;