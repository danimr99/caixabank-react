import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { NavigationLayout } from "../layouts";
import {
  APPBAR_HEIGHT,
  Assets,
  Breakpoints,
  GoBackButton,
  Link,
  Spacing,
} from "../ui";

export const NotFoundPage = () => {
  const isMobile = useMediaQuery((theme) =>
    theme.breakpoints.down(Breakpoints.MD)
  );

  return (
    <NavigationLayout>
      <Container fixed>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            minHeight: Spacing["3XL"],
          }}
        >
          <GoBackButton />
        </Stack>

        <Box
          component="section"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: { xs: `calc(100vh - ${APPBAR_HEIGHT}px)`, xl: "50vh" },
          }}
        >
          <Grid
            container
            sx={{
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              sx={{
                marginRight: isMobile ? "0px" : Spacing.LG,
                marginBottom: isMobile ? Spacing.LG : "0px",
              }}
            >
              <img
                src={Assets.BOT.src}
                width={Assets.BOT.size.width}
                height={Assets.BOT.size.height}
                alt={Assets.BOT.id}
              />
            </Grid>

            <Grid item>
              <Stack
                direction="column"
                spacing={isMobile ? Spacing.DETAILS : Spacing.XS}
                sx={{
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                <Typography variant={isMobile ? "h5" : "h3"} fontWeight={600}>
                  Error 404
                </Typography>
                <Typography
                  variant={isMobile ? "body1" : "h6"}
                  fontWeight={400}
                >
                  The page you were looking for could not be found.
                </Typography>
                <Link
                  label="Go back home"
                  path="/app/dashboard"
                  sx={{
                    textAlign: isMobile ? "center" : "left",
                  }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </NavigationLayout>
  );
};
