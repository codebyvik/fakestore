import ProductCard from "@/components/cards/product-card/product-card";
import EmptyPage from "@/components/shared/empty-page/empty-page";
import Filter from "@/components/shared/filter/filter";
import Loader from "@/components/shared/loader/loader";
import { fetchAllProducts } from "@/redux/product-slice";
import { RootState } from "@/redux/store";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { list, isFetching } = useSelector((state: RootState) => state.product.productList);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // if fetching then show loader
  if (isFetching) {
    return (
      <div className="flex w-full min-h-screen justify-center items-center">
        <Loader size={30} />
      </div>
    );
  }

  // If no products list from api return empty page
  if (!list) {
    return <EmptyPage Icon={<ShoppingCart size={100} />} />;
  }

  // Product List will be filtered based on category selected , else all products will be shown
  let productList =
    selectedCategories.length > 0
      ? list.filter((item) =>
          selectedCategories.some((selectedCategory) => item.category === selectedCategory)
        )
      : list;

  // map through and get all the categories and remove duplicates;
  let categoryList = list.map((item) => ({
    name: item.category,
  }));

  let uniqueCategoryList = categoryList.filter(
    (item, index, self) => index === self.findIndex((t) => t.name === item.name)
  );

  const handleCategorySelection = (categoryName: string) => {
    const isSelected = selectedCategories.find((item) => item === categoryName);

    if (isSelected) {
      // Remove from selected
      setSelectedCategories((prev) => prev.filter((item) => item !== categoryName));
    } else {
      // Add it to selected
      setSelectedCategories((prev) => [...prev, categoryName]);
    }
  };

  return (
    <div className="flex gap-10 px-5 md:px-40 mt-10">
      <aside>
        <Filter
          categories={uniqueCategoryList}
          selectedCategories={selectedCategories}
          handleCategorySelection={handleCategorySelection}
        />
      </aside>
      <aside className="flex flex-wrap gap-5 w-full justify-center items-center">
        {productList?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </aside>
    </div>
  );
};

export default LandingPage;
