
import React, {useState} from "react";
import Navbar from "../components/common/Navbar";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Center,
    Flex, FormControl, FormLabel,
    Heading,
    Input,
    Link,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";
import {MdDashboard, MdPerson, MdPlace, MdSettings} from "react-icons/md";
import {Usuarios} from "../components/Usuarios";
import {BiSolidMapPin} from "react-icons/bi";
import {Aprendiendo} from "./Aprendiendo";
import {Footer} from "../components/common/Footer";

const Home = () => {

    const [componenteActivo, setComponenteActivo] = useState('inicio');
    const cambiarComponente = (componente) => {
        setComponenteActivo(componente);
    };
    return (
        <>
        <Navbar islogged = {true}>
        </Navbar>
            <Flex bg={useColorModeValue('white', 'gray.800')}>
                <Box w="20%" bg={useColorModeValue('white', 'gray.800')} h="100%">
                    <VStack align="stretch" spacing="4" bg={useColorModeValue('gray.100', 'gray.500')} color={"black"} >
                        <Link onClick={() => cambiarComponente('usuarios')} display="flex"  alignItems="center" p="8" _hover={{ bg: "#ffda6a" }}
                              color={useColorModeValue('black', 'black')}>
                            <Icon as={MdPerson} mr="2" />
                            Usuarios
                        </Link>
                        <Link onClick={() => cambiarComponente('geocerca')} display="flex"  alignItems="center" p="8" _hover={{ bg: "#ffda6a" }}>
                            <Icon as={MdPlace} mr="2" />
                            Seguimiento
                        </Link>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            Matrices
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Link >
                                        Lista de Usuarios
                                    </Link>
                                     Más enlaces o subelementos aquí
                                </AccordionPanel>
                            </AccordionItem>
                             Más elementos de acordeón según sea necesario
                        </Accordion>
                        <Link display="flex"  alignItems="center" p="8" _hover={{ bg: "#ffda6a" }}>
                            <Icon as={BiSolidMapPin} mr="2" />
                            Geocercas
                        </Link>
                        <Link onClick={() => cambiarComponente('Aprendiendo')} display="flex"  alignItems="center" p="8" _hover={{ bg: "#ffda6a" }}>
                            <Icon as={MdDashboard} mr="2" />
                            Aprendiendo
                        </Link>
                        <Link href="/dashboard" display="flex"  alignItems="center" p="8" _hover={{ bg: "#ffda6a" }}>
                            <Icon as={MdDashboard} mr="2" />
                            Dashboard
                        </Link>
                        <Link href="/settings" display="flex" alignItems="center" p="8" _hover={{ bg: "#ffda6a" }}>
                            <Icon as={MdSettings} mr="2" />
                            Configuraciones
                        </Link>
                        {/* Más enlaces con iconos */}
                    </VStack>
                </Box>
                <Box w="75%" p="4">
                    {componenteActivo === 'usuarios' && <Usuarios />}
                    {componenteActivo === 'Aprendiendo' && <Aprendiendo />}
                    {/* Agrega aquí condiciones para otros componentes */}
                    {/* Contenido principal */}
                </Box>
            </Flex>
        <Footer>
        </Footer>
        </>
    )
}

export default Home;