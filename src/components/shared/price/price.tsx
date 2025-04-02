import { IndianRupee } from "lucide-react";

type Props = {
  price: number;
  qty?: number;
  mrp: number;
};

const Price = ({ price, qty, mrp }: Props) => {
  let qantity = qty || 1;
  let totalMrp = mrp * qantity;
  let totalItemValue = price * qantity;
  let discountPercentage = ((totalMrp - totalItemValue) / mrp) * 100;

  return (
    <p className="flex gap-2">
      <span className="text-xl font-bold flex items-center gap-1">
        {" "}
        <IndianRupee size={15} /> {totalItemValue.toFixed(2)}
      </span>
      <span className="text-sm line-through text-gray-500 flex items-center gap-1">
        <IndianRupee size={10} /> {totalMrp.toFixed(2)}
      </span>
      <span className="text-sm text-green-500 font-bold flex gap-1 items-center">
        {discountPercentage.toFixed(2)} % off
      </span>
    </p>
  );
};

export default Price;
