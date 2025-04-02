import ProductPreviewCard from "@/components/cards/product-card/product-preview-card";
import EmptyPage from "@/components/shared/empty-page/empty-page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RootState } from "@/redux/store";
import { IndianRupee, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { products } = useSelector((state: RootState) => state.cart);

  const totalPrice = products.reduce((total, item) => total + item.price * item.qty, 0);
  const totalMRP = products.reduce((total, item) => total + item.mrp * item.qty, 0);
  const totalDiscount = totalMRP - totalPrice;

  return (
    <div className="flex px-5 md:px-40 my-4 gap-4 flex-col md:flex-row">
      <aside className="flex-3">
        <Card>
          <CardHeader>
            <CardTitle>Product details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col w-full gap-2">
              {products?.length > 0 ? (
                <>
                  {products.map((item) => (
                    <ProductPreviewCard key={item.id} productDetails={item} />
                  ))}
                </>
              ) : (
                <EmptyPage
                  Icon={<ShoppingCart size={120} />}
                  text="Ooops!!. Your cart is empty. Try adding some products"
                />
              )}
            </div>
          </CardContent>
        </Card>
      </aside>
      {products?.length > 0 && (
        <aside className="flex-1">
          <Card className="sticky top-[70px]">
            <CardHeader className="border-b-2">
              <CardTitle>Price Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex justify-between">
                <span>Total Price</span>
                <span className="flex gap-1 items-center font-semibold">
                  <IndianRupee size={14} /> {totalMRP.toFixed(2)}
                </span>
              </p>
              <p className="flex justify-between text-green-500 my-2">
                <span>Total Discount</span>
                <span className="flex gap-1 items-center font-semibold">
                  - <IndianRupee size={14} /> {totalDiscount.toFixed(2)}
                </span>
              </p>

              <p className="flex font-bold justify-between border-y-2">
                <span>Total</span>
                <span className="flex gap-1 items-center ">
                  <IndianRupee size={14} /> {totalPrice.toFixed(2)}
                </span>
              </p>
            </CardContent>
            <CardFooter>
              <Button className="!bg-orange-500 w-full hover:!bg-orange-700 text-white font-bold text-lg cursor-pointer">
                Checkout
              </Button>
            </CardFooter>
          </Card>
        </aside>
      )}
    </div>
  );
};

export default CartPage;
