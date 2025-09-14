// src/pages/Home.jsx
import React from "react";
import { Container, Heading, Text, Button, Box, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import WorldMap from "../components/WorldMap";

export default function Home() {
    const navigate = useNavigate();

    const tagline = "Connecting students to a World of Research. Explore 100+ international STEM research opportunities worldwide.";

    return (
        <Box>
            {/* HERO: centered, animated */}
            <Box
                as="section"
                minH="60vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                px={4}
            >
                <VStack spacing={6}>
                    {/* LabScout title - fades/slides in */}
                    <motion.div
                        initial={{ opacity: 0, y: -18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Heading as="h1" size="3xl" color="white" letterSpacing="wide">
                            LabScout
                        </Heading>
                    </motion.div>

                    {/* Typing tagline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35, duration: 0.9 }}
                    >
                        <Text fontSize={["md", "lg"]} color="gray.200" maxW="900px" mx="auto">
                            <Typewriter
                                words={[tagline]}
                                loop={1}
                                cursor
                                cursorStyle="|"
                                typeSpeed={40}
                                deleteSpeed={0}
                                delaySpeed={1000}
                            />
                        </Text>
                    </motion.div>

                    {/* CTA button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 0.7 }}
                    >
                        <Button size="lg" colorScheme="teal" onClick={() => navigate("/internships")}>
                            Browse Internships
                        </Button>
                    </motion.div>
                    <Text fontSize="sm" color="gray.400" mt={8} textAlign="center">
                        Discover opportunities across the globe - Click a Country to Explore !!!
                    </Text>

                </VStack>
            </Box>

            {/* MAP section (unchanged behavior) */}
            <Container maxW="container.lg" py={[8, 12]}>
                <Box mt={4} p={4} borderRadius="xl" bg="transparent">
                    {/* <Text fontSize="sm" color="gray.400" mb={2} textAlign="center">
                        Interactive map — click a dot to filter internships
                    </Text> */}
                    <WorldMap />
                </Box>

            </Container>
        </Box>
    );
}
