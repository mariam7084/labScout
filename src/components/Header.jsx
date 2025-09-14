// src/components/Header.jsx
import React from "react";
import { Flex, Box, HStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
    return (
        <Flex as="nav" align="center" justify="space-between" py={4} px={[4, 6, 8]} bg="transparent">
            <Box fontWeight="bold" fontSize={["lg", "xl"]}>LabScout</Box>

            <HStack spacing={2}>
                <Button as={RouterLink} to="/" variant="ghost" colorScheme="whiteAlpha">Home</Button>
                <Button as={RouterLink} to="/internships" variant="ghost" colorScheme="whiteAlpha">Internships</Button>
                <Button as={RouterLink} to="/about" variant="ghost" colorScheme="whiteAlpha">About</Button>
            </HStack>
        </Flex>
    );
}
