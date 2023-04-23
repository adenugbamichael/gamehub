import { HStack, Image } from "@chakra-ui/react"
import micro from "../assets/micro.svg"
import ColorModeSwitch from "./ColorModeSwitch"

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={micro} boxSize='60px' />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
