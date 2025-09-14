// src/pages/About.jsx
import React from "react";
import {
    Box,
    Heading,
    Text,
    Link,
    VStack,
    Button,
    Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function About() {
    return (
        <Box px={[15, 100]} py={[8, 16]}>
            <VStack spacing={12} align="stretch">
                {/* Disclaimer */}
                <MotionBox
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    p={6}
                    borderRadius="lg"
                    bg="red.500"
                    color="gray.100"
                >
                    <Heading size="md" mb={2} color="white">
                        Disclaimer
                    </Heading>
                    <Text>
                        While we do our best to provide accurate information, the information on deadlines provided here should always be
                        independently verified from the official program websites. <br />This
                        platform does not involve any application fees or financial
                        transactions. If any costs exist, they are program-related and not
                        associated with LabScout.
                    </Text>
                </MotionBox>

                <Divider borderColor="gray.600" />

                {/* About LabScout */}
                <MotionBox
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Heading size="lg" mb={3} color="white">
                        About LabScout
                    </Heading>
                    <Text mb={3} color="gray.200">
                        LabScout is a student-driven platform dedicated to simplifying the search for international research opportunities. We know firsthand how challenging it can be to find these programs, so we've compiled a comprehensive database of over 100 international STEM research internships and opportunities. <br />
                        <br />
                        Our mission is to break down geographical barriers and empower students to easily discover and apply to programs that align with their academic and career aspirations. From summer internships to year-round research opportunities, LabScout is your central hub for finding the right program to kickstart your global research journey. We believe that an opportunity to conduct research abroad is a life-changing experience, and our platform is here to make that a reality for you. <br />
                        <br />
                        <i>Do you know of a great program we've missed? We're constantly working to expand our database. If you would like to contribute to a program, please use the button below.</i>
                        <br />
                        <br />
                    </Text>
                    <Button
                        as={Link}
                        href="https://docs.google.com/forms/d/e/1FAIpQLScc98H-SvX2WLhCfVyUC8H3wgRffnzZ2hSQP4npnrbE_ntgcg/viewform?usp=dialog"
                        target="_blank"
                        colorScheme="teal"
                    >
                        Contribute an Internship
                    </Button>
                </MotionBox>

                <Divider borderColor="gray.600" />

                <Box
                    mt={3}
                    p={6}
                    borderWidth="1px"
                    borderRadius="lg"
                    bg="rgba(255,255,255,0.04)"
                    style={{ backdropFilter: "blur(6px)" }}
                // textAlign="center"
                >
                    <Heading size="md" mb={3} color="">
                        🌟 Stories from Past Recipients (Get Featured!) - <i>Coming Soon !!</i>
                    </Heading>
                    <Text fontSize="sm" color="gray.300" mb={4}>
                        Navigating international research programs can be challenging, and we believe the best advice comes from someone who has been there.
                        <br />
                        That's why we're featuring stories from students who have completed an international STEM research program. By sharing your journey - the triumphs, challenges, and tips - you'll help other students find the courage and confidence to pursue their own research dreams. Plus, you’ll be a featured voice on our platform!
                        <br />
                        <br />

                        <b> <i>Have you completed an international STEM research program? We'd love to hear from you! Remember what it was like to be at the beginning of your journey? Share your experiences helping other navigate the process.  </i></b>
                        <br />
                        Express your interest in sharing you story and getting featured on LabScout. We will get back to you very soon!!
                        <br />

                    </Text>
                    <Button
                        as="a"
                        href="https://docs.google.com/forms/d/e/1FAIpQLScu_ot5-tk-g4qLbwEi7nTBxoEs6Mj_gBkFGg-rMz-mG8aIIg/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                        colorScheme="teal"
                    >
                        Share Your Story
                    </Button>
                </Box>




                <Divider borderColor="gray.600" />


                {/* About Me */}
                <MotionBox
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Heading size="lg" mb={3} color="white">
                        About Me
                    </Heading>
                    <Text mb={3} color="gray.200">
                        Hi, I’m Mariam, the creator of LabScout.
                        <br />
                        The idea for LabScout started in the middle of a frustrating search. After spending hours sifting through countless university websites, repositories for program links and outdated program pages, I realized how fragmented and difficult the process of finding the right international research opportunities and applying to it was. It seemed like a lot of doors were closed simply because the information wasn't easy to find or because I got to know about a program after its deadline ;) <br />
                        <br />
                        In the summer of 2024, after days of scanning websites, I stumbled upon the Koç University Summer Research Program in Turkey. I applied, was accepted, and had an incredible experience there. That's why I'm making this platform. I believe that students who are passionate about research shouldn't have to navigate this maze alone.
                        <br />
                        <br />

                        LabScout is my way of giving back and making the process simpler. My hope is to build the tool I wish I had, and I’m dedicated to keeping it a reliable, student-focused resource. I'm excited to see how this project helps you on your own research journey.
                        <br />
                        You can find me below :)

                    </Text>
                    <VStack align="flex-start" spacing={2}>
                        <Link href="https://www.linkedin.com/in/mariam-m7084/" isExternal color="blue.300">
                            LinkedIn
                        </Link>
                        {/* <Link href="mailto:your.email@example.com" color="teal.300">
                            Email Me
                        </Link> */}
                    </VStack>
                </MotionBox>

                <Divider borderColor="gray.600" />

                {/* Other / Feedback */}
                <MotionBox
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Heading size="lg" mb={3} color="white">
                        Feedback & Support
                    </Heading>
                    <Text mb={3} color="gray.200">
                        Found a bug? Have a concern? Want to suggest something? Please let
                        me know using the form below.
                    </Text>
                    <Button
                        as={Link}
                        href="https://docs.google.com/forms/d/e/1FAIpQLScmkuFDE8kXKwzjM3oBUVNtlRtdlxPN5eATdOLtlMRDzIHjnA/viewform?usp=dialog"
                        target="_blank"
                        colorScheme="orange"
                    >
                        Report a Bug / Feedback
                    </Button>
                </MotionBox>


                <Box mt={10} p={6} borderWidth="1px" borderRadius="lg" bg="rgba(255,255,255,0.04)" style={{ backdropFilter: "blur(6px)" }}>
                    <Heading size="md" mb={3} color="white">Privacy Notice</Heading>
                    <Text fontSize="sm" color="gray.300">
                        LabScout uses Google Analytics to collect anonymous usage data, such as page visits, session length, and the country of visitors.
                        This helps us improve the platform and understand where students are accessing opportunities from.
                        No personally identifiable information is collected, and IP addresses are anonymized.
                        We do not sell or share your data with third parties. Aggregate, anonymized statistics may be used to improve the platform or share the project’s impact.
                    </Text>
                </Box>

            </VStack>
        </Box>
    );
}
