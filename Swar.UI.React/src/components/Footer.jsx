import { Link } from "@heroui/react";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-2 text-md">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" size={20} />
            <span>by</span>
            <a
              href="https://github.com/neeraj779"
              target="_blank"
              className="font-bold transition-colors duration-300 hover:text-blue-400"
            >
              Neeraj
            </a>
          </div>
          <div>
            <Link
              isBlock
              showAnchorIcon
              href="https://neeraj.rocks"
              target="_blank"
              color="primary"
              size="sm"
            >
              Portfolio
            </Link>
            <Link
              isBlock
              showAnchorIcon
              href="https://github.com/neeraj779"
              target="_blank"
              color="primary"
              size="sm"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
