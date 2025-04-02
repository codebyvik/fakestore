import { RootState } from "@/redux/store";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const { products } = useSelector((state: RootState) => state.cart);

  let cartCount = products.reduce((total, item) => total + item.qty, 0);

  return (
    <div className="relative">
      <ShoppingCart size={22} />
      {products?.length > 0 && (
        <div className="absolute top-[-5px] right-[-10px] w-4 h-4 rounded-full bg-white text-black text-[10px] font-bold flex justify-center items-center ">
          {cartCount}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
