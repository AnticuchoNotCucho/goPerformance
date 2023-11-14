import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {
    Avatar,
    Box,
    Button, Center,
    Flex, Img,
    Menu,
    MenuButton, MenuDivider, MenuItem, MenuList,
    Stack,
    useColorMode,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Navbar = (props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    let navigate = useNavigate();
    return (
        <>
            <Box bg={'#ffda6a'} px={10}>
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                    <Box width="70px" height="70px" onClick={() => navigate("/home")}>
                        <Img src={"/logo.png"} width="100%" height="100%" objectFit="cover" />
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode} bg={useColorModeValue('#ffda6a', '#ffda6a')} color={"black"}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                            { props.islogged &&
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Monitor Go</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Cuenta</MenuItem>
                                    <MenuItem>Cerrar sesion</MenuItem>
                                </MenuList>
                            </Menu>
                            }
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default Navbar;