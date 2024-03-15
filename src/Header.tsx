import patternCircle from "@assets/images/pattern-circles.svg";
import { cn } from "@/lib/utils.ts";

export type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn("relative z-10 flex flex-col items-center", className)}
    >
      <img
        src={patternCircle}
        alt="pattern-circles"
        className="absolute left-1/2 top-1/2 -z-10  -translate-x-1/2 -translate-y-1/2"
      />
      <h1 className="text-dark-desaturated-blue text-center text-[28px] font-extrabold leading-[38px]">
        Simple, traffic-based pricing
      </h1>
      <p className="text-grayish-blue mt-[12px] text-center text-[15px] font-semibold leading-[20px]">
        Sign-up for our 30-day trial. No credit card required.{" "}
      </p>
    </header>
  );
}
