import { routeNames } from "@/routes/routes";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
type Props = {};

const Header = (props: Props) => {
  return (
    <div
      className={`sticky top-0 left-0 w-full h-[60px] bg-primary px-5 md:px-40 flex items-center justify-between`}
    >
      <div>
        <Link to={routeNames.home}>
          <h2 className="text-2xl font-bold text-white cursor-pointer">Fake Store</h2>
        </Link>
      </div>
      <Link to={routeNames.cart}>
        <div className="text-white cursor-pointer">
          <ShoppingCart size={22} />
        </div>
      </Link>
    </div>
  );
};

export default Header;
