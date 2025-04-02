import Loader from "@/components/shared/loader/loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchProductDetails } from "@/redux/product-slice";
import { RootState } from "@/redux/store";
import { IndianRupee, Star } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { isFetching, details } = useSelector((state: RootState) => state.product.productDetails);

  useEffect(() => {
    if (params?.id) {
      dispatch(fetchProductDetails(parseInt(params.id)));
    }
  }, [params?.id]);

  if (isFetching || !details) {
    return (
      <div className="flex w-full min-h-screen justify-center items-center">
        <Loader size={30} />
      </div>
    );
  }

  const fillPercentage = (details.rating.rate / 5) * 100;

  let increasedMRP = details.price + Math.random() * 1000;
  let discountPercentage = ((increasedMRP - details.price) / increasedMRP) * 100;

  return (
    <div className="flex flex-col md:flex-row gap-4 px-2 md:px-40 my-4">
      <aside className="flex-1">
        <img
          className="w-full h-[400px] object-contain"
          src={details?.image}
          alt={`${details.title}-image`}
        />
        <Button className="!bg-orange-500 text-white cursor-pointer w-full mt-4 hover:!bg-orange-400">
          Add to card
        </Button>
      </aside>
      <aside className="flex-2">
        {/* Header */}
        <h2 className="text-2xl font-bold ">{details.title}</h2>
        <p className="bg-green-500 px-2 text-white font-semibold rounded-sm flex gap-2 items-center w-fit">
          {details.rating.rate}
          <div className="relative w-[16px] h-[16px] flex items-center">
            {/* Empty Star (Outline) */}
            <Star size={16} className="text-white" />

            {/* Filled Star (Clipped to Percentage) */}
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <Star size={16} className="text-white fill-white" />
            </div>
          </div>
        </p>
        {/* Price */}
        <p className="flex gap-2">
          <span className="text-xl font-bold flex items-center gap-1">
            {" "}
            <IndianRupee size={15} /> {details.price.toFixed(2)}
          </span>
          <span className="text-sm line-through text-gray-500 flex items-center gap-1">
            <IndianRupee size={10} /> {increasedMRP.toFixed(2)}
          </span>
          <span className="text-sm text-green-500 font-bold flex gap-1 items-center">
            {discountPercentage.toFixed(2)} % off
          </span>
        </p>

        {/* Description */}
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Description</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{details.description}</CardDescription>
          </CardContent>
        </Card>

        {/* Rating and reviews */}
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>
              <div className="flex justify-between items-center">
                <p>Ratings</p>

                <Button variant={"secondary"} className="cursor-pointer hover:shadow-md ">
                  Rate
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p className="text-2xl text-black px-2 font-bold rounded-sm flex gap-2 items-center w-fit">
                {details.rating.rate}
                <div className="relative w-[20px] h-[20px] flex items-center">
                  {/* Empty Star (Outline) */}
                  <Star size={20} className="text-black" />

                  {/* Filled Star (Clipped to Percentage) */}
                  <div
                    className="absolute top-0 left-0 h-full overflow-hidden"
                    style={{ width: `${fillPercentage}%` }}
                  >
                    <Star size={20} className="text-black fill-black" />
                  </div>
                </div>
              </p>
              <p className="ml-1">{details.rating.count} ratings</p>
            </CardDescription>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
};

export default ProductDetails;
