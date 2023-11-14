import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement, useColorModeValue
} from "@chakra-ui/react";
import {useNavigate, useNavigation} from "react-router-dom";
import Navbar from "../components/common/Navbar";

import {loginTest} from '../services/authService';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const usuariosTemporales = []


const Login = () => {
    let navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [logged, setLogged] = useState(false);

    const handleLogin = async () => {
        let result = await loginTest(username, password)
        if (result) {
            navigate("/home");
        } else {
            navigate("/error");
        }
    }


    const handleShowClick = () => setShowPassword(!showPassword);

    return (
        <>
      {/*  <Navbar islogged = {logged} >
        </Navbar>*/}
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.80"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="#ffda6a" />
                <Heading color="black">GoPerformance</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form onSubmit={handleLogin}>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.100"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input
                                        type="Usuario"
                                        placeholder="Usuario"
                                        value={username}
                                        onChange={(e) => setusername(e.target.value)}
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Contrasena"
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}

                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Ocultar" : "Mostrar"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormHelperText textAlign="right">
                                    <Link>forgot password?</Link>
                                </FormHelperText>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                                bgColor="#ffda6a"
                                color=""
                            >
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                New to us?{" "}
                <Link color="#ffda6a" href="#">
                    Sign Up
                </Link>
            </Box>
        </Flex>
        </>
    );
};

export default Login;
