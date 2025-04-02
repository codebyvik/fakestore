import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { baseRoutes } from "@/routes/routes";
import { ProductDetailsType } from "@/types/products/product-state.types";
import { IndianRupee } from "lucide-react";
import { Link } from "react-router";

type Props = {
  product: ProductDetailsType;
};

const ProductCard = ({ product }: Props) => {
  let increasedMRP = product.price + Math.random() * 1000;
  let discountPercentage = ((increasedMRP - product.price) / increasedMRP) * 100;
  return (
    <Link to={`${baseRoutes.productDetails}/${product.id}`}>
      <Card className="w-[300px] cursor-pointer hover:scale-102 transition-transform duration-200 shadow-none hover:shadow-2xl border-none">
        <CardHeader>
          <img
            className="w-full h-[100px] object-contain"
            src={product.image}
            alt={`${product.title}-image`}
          />
        </CardHeader>
        <CardContent>
          <h6 className="bold ">{product.title}</h6>
          <CardDescription className="truncate w-full">{product.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex flex-col justify-start items-start">
          <div className="flex gap-2">
            <p className="text-xl text-gray-500 line-through flex gap-1 items-center">
              <IndianRupee size={15} />
              {increasedMRP.toFixed(2)}
            </p>
            <p className="text-green-500 flex gap-1 items-center">
              {discountPercentage.toFixed(2)} % off
            </p>
          </div>
          <p className="flex gap-1 items-center">
            <IndianRupee size={15} /> {product.price?.toFixed(2)}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
