import { BsCodeSquare, BsFileEarmarkImage } from "react-icons/bs";
import { GiMeepleCircle, GiNightSky } from "react-icons/gi";
import { RiGovernmentLine, RiHistoryFill } from "react-icons/ri";
import { BiCollection, BiTransferAlt } from "react-icons/bi";
import { AiOutlineSwap } from "react-icons/ai";

export default [
  { name: "Transactions", path: "/", icon: BiTransferAlt },
  { name: "NFT", path: "/nft", icon: BsFileEarmarkImage },
  { name: "Airdrop", path: "/airdrop", icon: GiNightSky },
  { name: "Defi", path: "/defi", icon: AiOutlineSwap },
  { name: "Governance", path: "/governance", icon: RiGovernmentLine },
  { name: "Supply", path: "/supply", icon: GiMeepleCircle },
  { name: "Development", path: "/development", icon: BsCodeSquare },
  { name: "Collection", path: "/collection", icon: BiCollection },
  { name: "TX history ", path: "/tx-history", icon: RiHistoryFill },

];