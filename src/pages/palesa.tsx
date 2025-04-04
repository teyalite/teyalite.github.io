import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import Typed from "typed.js";

export default function Dado() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "You are an absolute joy to be around.",
        "You have a heart of gold.",
        "You have the most beautiful eyes.",
        "You have a unique and amazing personality.",
      ],
      typeSpeed: 50,
      smartBackspace: false,
      backDelay: 1000,
      shuffle: true,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

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
            {"Hi, "}
            <Box
              component={"br"}
              sx={{ display: { xs: "block", md: "none" } }}
            />
            {"Palesa"}
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
            ref={el}
          />
        </Stack>
      </Stack>
    </Container>
  );
}
