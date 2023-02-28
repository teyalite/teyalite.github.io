import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

export default function Home() {
    return (
        <Container
            maxWidth="md"
            component="main"
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Stack spacing={4}>
                <Stack
                    position="relative"
                    textAlign="center"
                    spacing={{ xs: 4, md: 3 }}
                    pt={{ xs: 4, md: 20 }}
                >
                    <div className="center" />
                    <Typography variant="h3">
                        {"Hi, I'm "}
                        <Box
                            component={"br"}
                            sx={{ display: { xs: "block", md: "none" } }}
                        />
                        {"Abdoulkader Haidara"}
                        <Box
                            component={"span"}
                            sx={{ display: { xs: "none", md: "inline" } }}
                        >
                            !
                        </Box>
                    </Typography>
                    <Typography
                        variant="h4"
                        className="yellow-text"
                        fontWeight="bold"
                    >
                        Software Engineer
                    </Typography>
                </Stack>
                {/* <Typography>
                    {`
                      Software Engineer from Mali currently living in Russia. I'm
                      passionate about working on open source projects & exploring new technologies.
                    `}
                </Typography> */}
            </Stack>
        </Container>
    );
}
