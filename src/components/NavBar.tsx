import { HStack, Image } from "@chakra-ui/react"
import micro from "../assets/micro.svg"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Image src={micro} boxSize='60px' />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
