import * as Slider from "@radix-ui/react-slider";
import { cn } from "@/lib/utils.ts";
import iconSlider from "@assets/images/icon-slider.svg";

export type SliderProps = {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number[];
  onValueChanged?: (value: number[]) => void;
};

export default function PriceSlider({ className, ...rest }: SliderProps) {
  return (
    <Slider.Root
      className={cn("relative flex h-[40px] items-center", className)}
      onValueChange={(value) => rest.onValueChanged?.(value)}
      {...rest}
    >
      <Slider.Track className="bg-light-grayish-blue-empty-slider-bg relative h-[8px] grow rounded-full">
        <Slider.Range className="bg-soft-cyan absolute h-full grow rounded-full" />
      </Slider.Track>
      <Slider.Thumb
        className="bg-strong-cyan hover:bg-soft-cyan block h-[40px] w-[40px] rounded-full
        border-0 bg-center bg-no-repeat shadow-[0px_15px_30px_rgba(0,255,231,0.6)] focus:outline-none"
        style={{ backgroundImage: `url(${iconSlider})` }}
      />
    </Slider.Root>
  );
}
