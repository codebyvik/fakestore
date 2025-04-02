import Price from "@/components/shared/price/price";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { addToCart, decreaseItemQty, removeFromCart } from "@/redux/cart-slice";
import { cartProductsType } from "@/types/cart/cart-state.types";
import { useDispatch } from "react-redux";

type Props = {
  productDetails: cartProductsType;
};

const ProductPreviewCard = ({ productDetails }: Props) => {
  const dispatch = useDispatch();

  const handleIncreaseQty = () => {
    dispatch(addToCart(productDetails));
  };
  const handleDecreaseQty = () => {
    dispatch(decreaseItemQty(productDetails.id));
  };

  const handleRemoveProduct = () => {
    dispatch(removeFromCart(productDetails.id));
  };

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-sm object-contain"
              src={productDetails.image}
              alt={`${productDetails.title}-image`}
            />
            <div>
              <p className="text-md font-semibold">{productDetails.title}</p>
              <Price
                mrp={productDetails.mrp}
                price={productDetails.price}
                qty={productDetails.qty}
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="flex gap-2 items-center">
              <Button
                onClick={handleDecreaseQty}
                className="cursor-pointer text-xl hover:shadow-sm"
              >
                -
              </Button>
              <p>{productDetails.qty}</p>
              <Button
                onClick={handleIncreaseQty}
                className="cursor-pointer text-xl hover:shadow-sm"
              >
                +
              </Button>
            </div>
            <Button
              onClick={handleRemoveProduct}
              variant={"destructive"}
              className="!bg-red-500 text-white cursor-pointer hover:!bg-red-800"
            >
              Remove
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductPreviewCard;
