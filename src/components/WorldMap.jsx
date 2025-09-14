// src/components/WorldMap.jsx
import React, { useMemo } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import internships from "../data/internships.json";

// Official low-res world map from react-simple-maps docs
// const GEO_URL = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";


/**
 * Small alias map for country names that often differ between your data and topojson property.
 * Add more aliases as you discover mismatches (e.g. "USA" -> "United States of America").
 */
const COUNTRY_NAME_ALIASES = {
    "USA": "United States of America",
    "United States": "United States of America",
    "UK": "United Kingdom",
    "Abu Dhabi": "United Arab Emirates",
    "South Korea": "Korea, Republic of",
    "Russia": "Russian Federation",
    "Netherland": "Netherlands"
};

export default function WorldMap({ width = 980, height = 420 }) {
    const navigate = useNavigate();

    // Count programs per country (from internships.json)
    const countsByCountry = useMemo(() => {
        return internships.reduce((acc, item) => {
            const c = (item.Country || "Unknown").trim();
            acc[c] = (acc[c] || 0) + 1;
            return acc;
        }, {});
    }, []);

    return (
        <Box w="100%" maxW="1200px" mx="auto" px={4}>
            <ComposableMap projection="geoMercator"
                projectionConfig={{
                    scale: 190,        // zoom level, increase to make map bigger
                    center: [0, 35],   // adjust vertical/horizontal centering
                }}
                width={980}
                height={500}
                style={{ width: "100%", height: "auto" }}>
                <Geographies geography={GEO_URL}>
                    {({ geographies }) => {
                        // helper to get geo display name safely
                        const geoName = (geo) => (geo.properties.NAME || geo.properties.ADMIN || geo.properties.name || "").toString();

                        // Build markers by matching your country names to geography entries
                        const markers = Object.keys(countsByCountry).map((country) => {
                            const normalized = country.toLowerCase();
                            // try exact match first, then "includes"
                            let matchedGeo = geographies.find(g => geoName(g).toLowerCase() === normalized);

                            if (!matchedGeo) {
                                matchedGeo = geographies.find(g => geoName(g).toLowerCase().includes(normalized) || normalized.includes(geoName(g).toLowerCase()));
                            }

                            // try alias mapping
                            if (!matchedGeo && COUNTRY_NAME_ALIASES[country]) {
                                const aliasLow = COUNTRY_NAME_ALIASES[country].toLowerCase();
                                matchedGeo = geographies.find(g => geoName(g).toLowerCase() === aliasLow || geoName(g).toLowerCase().includes(aliasLow));
                            }

                            if (!matchedGeo) {
                                // no geometry found — skip marker (you can add alias mapping to fix)
                                console.warn(`WorldMap: no geo match for country: "${country}" — add an alias in COUNTRY_NAME_ALIASES if necessary.`);
                                return null;
                            }

                            const centroid = geoCentroid(matchedGeo);
                            if (!centroid || Number.isNaN(centroid[0])) {
                                return null;
                            }

                            return {
                                country,
                                coordinates: centroid,
                                count: countsByCountry[country]
                            };
                        }).filter(Boolean);

                        return (
                            <>
                                {geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="rgba(255,255,255,0.06)"         // country color that pops against page bg
                                        stroke="rgba(255,255,255,0.06)"
                                        style={{
                                            default: { outline: "none" },
                                            hover: { fill: "rgba(255,255,255,0.12)", outline: "none" },
                                            pressed: { outline: "none" }
                                        }}
                                    />
                                ))}

                                {markers.map((m) => (
                                    <Marker key={m.country} coordinates={m.coordinates}>
                                        {/* group so title works and click is attached */}
                                        <g transform="translate(-10, -10)">
                                            <circle
                                                r={6 + Math.min(m.count, 8)} // slightly scale with count
                                                fill="#FF6B6B"
                                                stroke="#fff"
                                                strokeWidth={1}
                                                style={{ cursor: "pointer" }}
                                                onClick={() => navigate(`/internships?country=${encodeURIComponent(m.country)}`)}
                                            />
                                            <title>{`${m.country}: ${m.count} program(s)`}</title>
                                        </g>
                                    </Marker>
                                ))}
                            </>
                        );
                    }}
                </Geographies>
            </ComposableMap>
            {/* below text appears on the map and does not good for now */}
            {/* <Text fontSize="sm" color="gray.300" textAlign="center" mt={2}>
                Click a dot to view internships for that country.
            </Text> */}
        </Box>
    );
}
