import { HStack, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import micro from "../assets/micro.svg"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Link to='/'>
        <Image src={micro} boxSize='60px' />
      </Link>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
