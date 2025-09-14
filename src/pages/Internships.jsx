// src/pages/Internships.jsx
import React, { useMemo } from "react";
import { Container, Select, Box, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { useSearchParams, useNavigate } from "react-router-dom";
import internships from "../data/internships.json";

import ReactCountryFlag from "react-country-flag";
import { countryToCode } from "../data/countryToCode";

export default function Internships() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const selectedCountry = searchParams.get("country") || "";

    // unique sorted countries
    const countries = useMemo(() => {
        const set = new Set(internships.map(i => i.Country || "Unknown"));
        return Array.from(set).sort();
    }, []);

    // filtered data
    const data = useMemo(() => {
        if (!selectedCountry) return internships;
        return internships.filter(i => (i.Country || "") === selectedCountry);
    }, [selectedCountry]);

    return (
        <Container maxW="container.lg" py={[6, 8]}>
            <HStack mb={6} justify="space-between">
                <Text fontSize="xl" fontWeight="semibold">{selectedCountry ? `Internships — ${selectedCountry}` : "All Internships"}</Text>
                <Select
                    width="220px"
                    value={selectedCountry}
                    bg="white"             // dropdown background
                    color="black"          // text color
                    _focus={{ bg: "white" }}
                    _hover={{ bg: "white" }}
                    onChange={(e) => {
                        const v = e.target.value;
                        const url = v ? `/internships?country=${encodeURIComponent(v)}` : "/internships";
                        navigate(url);
                    }}
                >
                    <option style={{ color: "black" }} value="">All Countries</option>
                    {countries.map(c => (
                        <option key={c} value={c} style={{ color: "black" }}>
                            {c}
                        </option>
                    ))}
                </Select>

            </HStack>

            <VStack spacing={4} align="stretch">
                {data.length === 0 && <Text color="gray.300">No internships found for selected country.</Text>}

                {data.map((item, idx) => (

                    <Box
                        key={idx}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        p={4}
                        bg="rgba(255,255,255,0.04)"
                        borderRadius="lg"
                        boxShadow="md"
                        style={{ backdropFilter: "blur(6px)" }}
                    >
                        {/* Left content */}
                        <Box>
                            {/* Program + Organization */}
                            <Text fontWeight="bold">
                                {item.program} — {item.organization}
                            </Text>

                            {/* Country + Flag */}
                            <Text fontSize="sm" color="gray.300">
                                {countryToCode[item.Country] && (
                                    <ReactCountryFlag
                                        countryCode={countryToCode[item.Country]}
                                        svg
                                        style={{
                                            width: "1.1em",
                                            height: "1.1em",
                                            marginRight: "6px",
                                        }}
                                    />
                                )}
                                {item.Country}
                            </Text>

                            {/* Duration */}
                            {item.Duration && (
                                <Text fontSize="sm" color="gray.400">
                                    Duration: {item.Duration}
                                </Text>
                            )}

                            {/* Deadline */}
                            <Text fontSize="sm" color="gray.400">
                                Deadline_Details: {String(item.deadline_details || "TBA")}
                            </Text>

                            {/* Notes (if any) */}
                            {item.notes && (
                                <Text fontSize="sm" color="gray.400">
                                    Notes: {item.notes}
                                </Text>
                            )}
                        </Box>

                        {/* Right content (Button) */}
                        <Button
                            as="a"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            colorScheme="teal"   // Changed from teal → blue
                            ml={4}
                        >
                            Visit Website
                        </Button>
                    </Box>

                ))}
            </VStack>
        </Container>
    );
}
