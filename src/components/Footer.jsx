// src/components/Footer.jsx
import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box as="footer" py={6} textAlign="center" mt={8}>
            {/* <Text fontSize="sm" color="gray.300">© {new Date().getFullYear()} LabScout • Built by Mariam</Text> */}
            {/* <Text fontSize="sm" color="gray.300">© {new Date().getFullYear()} LabScout • Exploring research, together</Text> */}
            <Text fontSize="sm" color="gray.300">© {new Date().getFullYear()} LabScout • Made with ❤️ for aspiring researchers</Text>
        </Box>
    );
}
