import { useCoupons } from "./hooks/useCoupons";

const CouponsPage = () => {
  const {} = useCoupons();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">
        Coupons
      </h1>

      <p className="text-slate-600">
        Manage discount coupons here.
      </p>
    </div>
  );
};

export default CouponsPage;
