import Header from "@/Header.tsx";
import PriceCard from "@/components/PriceCard.tsx";

function App() {
  return (
    <div className="font-manrope flex h-[800px] w-[1440px] shrink-0 flex-col items-center bg-white bg-[url('/bg-pattern.svg')] bg-contain bg-no-repeat">
      <Header className="mt-[67px]" />
      <PriceCard className="mt-[92px]" />
    </div>
  );
}

export default App;
