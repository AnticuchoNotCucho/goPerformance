import {FaLinkedin, FaTwitter} from "react-icons/fa";
import {Box, Button, ButtonGroup, Flex, IconButton, Img, Stack, Text} from "@chakra-ui/react";
import {FaGithub} from "react-icons/fa6";

export const Footer = () => {
    return (
        <Box as="footer" role="contentinfo" py={{ base: '12', md: '16' }} w="100%" bg="#212529" marginTop={"10vw"}>
            <Flex
                direction={{ base: 'column', md: 'row' }} // Columna en móviles, fila en pantallas más grandes
                align="center"
                justify="space-between" // Espacia los elementos entre sí
                mx="auto"
                maxW="6xl"
                px={{ base: '4', md: '8' }}
            >
                <Flex align="center"> {/* Contenedor para el logo */}
                    <Box width="100%" height="50px">
                        <Img src={"/I+D.png"} width="100%" height="100%" objectFit="cover" />
                    </Box>
                </Flex>

                <Flex direction="column" align="center" > {/* Contenedor para iconos y texto */}
                    <ButtonGroup variant="tertiary" mb="6" color={"white"}>
                        <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
                        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
                        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
                    </ButtonGroup>
                    <Text fontSize="sm" color="white">
                        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
                    </Text>
                </Flex>
                <Flex align="center"> {/* Contenedor para el logo */}
                    <Box width="100%"  height="70px">
                        <Img src={"/logoDobetter.png"} width="100%" height="100%" objectFit="cover" />
                    </Box>
                </Flex>

            </Flex>
        </Box>
    );
}
