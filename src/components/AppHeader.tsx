import { Avatar } from "@chakra-ui/react";
import { cart, profile, menu, ship, support, refund } from "./../assets";
import {
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

const links = [
  "Home",
  "Store",
  "Accessories",
  "Brand",
  "Pages",
  "About Us",
  "News",
  "Contact Us",
];

const perks = [
  { name: "FREE SHIPPING", img: ship },
  { name: "100% REFUND", img: refund },
  { name: "SUPPORT 24/7", img: support },
];

export const AppHeader = () => {
  return "";
};
