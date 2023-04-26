import PortfolioItem from "./portfolio-item";

export default function PortfolioList() {
  return (
    <div className="flex gap-6">
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </div>
  );
}
