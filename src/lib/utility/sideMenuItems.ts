import { BsFileEarmarkImage } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import { RiHistoryFill } from "react-icons/ri";
import { AiOutlineSwap } from "react-icons/ai";
import { GiNightSky } from "react-icons/gi";

export default [
  { name: "Transactions", path: "/", icon: BiTransferAlt },
  { name: "NFT", path: "/nft", icon: BsFileEarmarkImage },
  { name: "Airdrop", path: "/airdrop", icon: GiNightSky },
  { name: "Defi", path: "/defi", icon: AiOutlineSwap },
  { name: "TX history ", path: "/tx-history", icon: RiHistoryFill },

];