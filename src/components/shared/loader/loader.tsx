import { Loader2 } from "lucide-react";

type Props = {
  size?: number;
};

const Loader = ({ size = 5 }: Props) => {
  return <Loader2 size={size} className="animate-spin" />;
};

export default Loader;
