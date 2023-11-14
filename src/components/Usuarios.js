import React, {useRef, useState} from "react";
import {
    Box,
    Button,
    Checkbox,
    Flex, FormControl, FormLabel, Input,
    Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader,
    ModalOverlay, Select,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr, useDisclosure
} from "@chakra-ui/react";
export const Usuarios = () => {
    // Simulando datos de usuarios
    const usuarios = [
        { id: 1, nombre: 'Usuario 1', email: 'usuario1@example.com' },
        { id: 2, nombre: 'Usuario 2', email: 'usuario2@example.com' },
        { id: 3, nombre: 'Usuario 3', email: 'usuario3@example.com' },
        // ... más usuarios
    ];

    const { isOpen, onOpen, onClose } = useDisclosure()
    const fileInputRef = useRef();

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    // Estado para los usuarios seleccionados
    const [usuariosSeleccionados, setUsuariosSeleccionados] = useState([]);

    // Manejador para cuando se selecciona/deselecciona un usuario
    const toggleUsuarioSeleccionado = (usuarioId) => {
        setUsuariosSeleccionados((prev) =>
            prev.includes(usuarioId)
                ? prev.filter((id) => id !== usuarioId)
                : [...prev, usuarioId]
        );
    };

    return (
        <>
        <Box>
            <Flex justifyContent="space-between" mb="4">
                <Button bg={"#ffda6a"} onClick={onOpen}>
                    Crear Nuevo Usuario
                </Button>
                <Flex>
                    <Button mr="2" bg={"orange"}>
                        Editar
                    </Button>
                    <Button bg={"indianred"}>
                        Deshabilitar
                    </Button>
                </Flex>
            </Flex>
            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th>Seleccionar</Th>
                        <Th>Nombre</Th>
                        <Th>Email</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {usuarios.map((usuario) => (
                        <Tr key={usuario.id}>
                            <Td>
                                <Checkbox
                                    isChecked={usuariosSeleccionados.includes(usuario.id)}
                                    onChange={() => toggleUsuarioSeleccionado(usuario.id)}
                                />
                            </Td>
                            <Td>{usuario.nombre}</Td>
                            <Td>{usuario.email}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            {usuariosSeleccionados.length > 0 && (
                <Text mt="4">
                    Usuarios seleccionados: {usuariosSeleccionados.join(', ')}
                </Text>
            )}
        </Box>
    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
    >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Crear Usuario</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl mt={4}>
                    <FormLabel>Nombre</FormLabel>
                    <Input ref={initialRef} placeholder='Nombre' />
                </FormControl>
                <FormControl mt={4} s>
                    <FormLabel>Adjuntar Imagen Perfil</FormLabel>
                    <Button
                        onClick={() => fileInputRef.current.click()}
                        colorScheme='blue'
                    >
                        Subir Archivo
                    </Button>
                    <Input
                        type='file'
                        hidden
                        ref={fileInputRef}
                        onChange={(e) => console.log(e.target.files[0])}
                        accept='image/*'
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Correo</FormLabel>
                    <Input ref={initialRef} placeholder='Ejemplo@dobetter.cl' />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Cargo</FormLabel>
                    <Select placeholder='Selecciona un Cargo'>
                        <option value='operador-go'>Operador GO</option>
                        <option value='gerente'>Gerente</option>
                        <option value='supervisor'>Supervisor</option>
                        {/* Agrega más opciones según sea necesario */}
                    </Select>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Permisos</FormLabel>
                    <Select placeholder='Selecciona un Rol'>
                        <option value='operador-go'>Administrador</option>
                        <option value='gerente'>Monitor</option>
                        <option value='supervisor'>Supervisor</option>
                        <option value='supervisor'>Etc</option>

                        {/* Agrega más opciones según sea necesario */}
                    </Select>
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3}>
                    Guardar
                </Button>
                <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
        </>
    );

};
