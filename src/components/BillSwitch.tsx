import * as Switch from "@radix-ui/react-switch";
import { cn } from "@/lib/utils.ts";

export type BillSwitchProps = {
  className?: string;
  onCheckedChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
  checked?: boolean;
};

export default function BillSwitch({ className, ...rest }: BillSwitchProps) {
  return (
    <Switch.Root
      className={cn(
        "h-[22px] w-[43px] ",
        "bg-light-gray-sh-blue-toggle-bg hover:bg-soft-cyan data-[state=checked]:bg-strong-cyan relative cursor-default rounded-full outline-none",
        className,
      )}
      {...rest}
    >
      <Switch.Thumb className="block h-[14px] w-[14px] translate-x-[4px] rounded-full bg-white data-[state=checked]:translate-x-[24px] " />
    </Switch.Root>
  );
}
