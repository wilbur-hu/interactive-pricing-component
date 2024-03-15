import { cn } from "@/lib/utils.ts";
import PriceSlider from "@/components/Slider.tsx";
import { useState } from "react";
import BillSwitch from "@/components/BillSwitch.tsx";

export type PriceCardProps = {
  className?: string;
};

type PricingPlan = {
  price: number;
  pageViews: string;
};

const pricingPlans: PricingPlan[] = [
  { price: 8, pageViews: "10K PAGEVIEWS" },
  { price: 12, pageViews: "50K PAGEVIEWS" },
  { price: 16, pageViews: "100K PAGEVIEWS" },
  { price: 24, pageViews: "500K PAGEVIEWS" },
  { price: 36, pageViews: "1M PAGEVIEWS" },
];

export default function PriceCard({ className }: PriceCardProps) {
  const [priceIdx, setPriceIdx] = useState(2);
  const [yearlyBilling, setYearlyBilling] = useState(false);

  return (
    <div
      className={cn(
        "flex w-[540px] flex-col rounded-[8px] bg-white",
        className,
      )}
    >
      <h2 className="mx-[48px] mt-[37px] flex items-center">
        <span className="text-grayish-blue text-[14px] font-extrabold uppercase leading-[19px] tracking-[2px]">
          {pricingPlans[priceIdx].pageViews}
        </span>

        <span className="ml-auto flex items-center">
          <span className="text-dark-desaturated-blue text-[40px] font-extrabold tracking-[-1px]">
            $
            {`${(pricingPlans[priceIdx].price * (yearlyBilling ? 0.75 : 1)).toFixed(2)}`}
          </span>
          <span className="text-grayish-blue ml-[8px] text-[16px] font-semibold">
            / month
          </span>
        </span>
      </h2>

      <PriceSlider
        className="mx-[48px] mt-[22px] self-stretch"
        min={0}
        max={4}
        defaultValue={[priceIdx]}
        onValueChanged={(value) => setPriceIdx(value[0])}
      />

      <div className="mt-[38px] flex items-center justify-center self-stretch">
        <span className="text-grayish-blue grow basis-0 text-right text-[12px] font-semibold leading-[16px]">
          Monthly Billing
        </span>
        <BillSwitch
          className="mx-[14px] shrink-0"
          checked={yearlyBilling}
          onCheckedChange={(checked) => setYearlyBilling(checked)}
        />
        <span className="flex  grow basis-0 items-center">
          <span className="text-grayish-blue text-left text-[12px] font-semibold leading-[16px]">
            Yearly Billing
          </span>
          <span className="bg-light-grayish-red text-light-red ml-[9px] h-[19px] w-[80px] rounded-[9.5px] text-center text-[10px] font-extrabold leading-[19px]">
            25% discount
          </span>
        </span>
      </div>

      <hr className="mt-[40px] h-[1px] self-stretch bg-[#ECF0FB]" />

      <div className="mx-[48px] mt-[35px] flex items-center justify-between">
        <FeatureList />

        <button
          className="bg-dark-desaturated-blue text-pale-blue h-[41px] w-[170px] rounded-[20.5px]
                     text-[12px] font-extrabold leading-[12px] hover:text-white"
        >
          Start my trial
        </button>
      </div>
    </div>
  );
}

function FeatureList({ className }: { className?: string }) {
  const features = [
    "Unlimited websites",
    "100% data ownership",
    "Email reports",
  ];

  return (
    <ul
      className={cn(
        "text-grayish-blue text-[12px] font-semibold leading-[16px]",
        className,
      )}
    >
      {features.map((feature) => (
        <li className="mt-[10px] before:pr-[16.05px] before:content-[url('/icon-check.svg')]  first:mt-0">
          {feature}
        </li>
      ))}
    </ul>
  );
}
