import { BsFileEarmarkImage } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import { RiGovernmentLine, RiHistoryFill } from "react-icons/ri";
import { AiOutlineSwap } from "react-icons/ai";
import { GiMeepleCircle, GiNightSky } from "react-icons/gi";

export default [
  { name: "Transactions", path: "/", icon: BiTransferAlt },
  { name: "NFT", path: "/nft", icon: BsFileEarmarkImage },
  { name: "Airdrop", path: "/airdrop", icon: GiNightSky },
  { name: "Defi", path: "/defi", icon: AiOutlineSwap },
  { name: "Governance", path: "/governance", icon: RiGovernmentLine },
  { name: "Supply", path: "/supply", icon: GiMeepleCircle },
  { name: "TX history ", path: "/tx-history", icon: RiHistoryFill },

];