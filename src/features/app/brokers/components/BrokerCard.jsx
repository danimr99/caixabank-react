import { useRef } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import { translateCountry } from "../../../../utils";
import { useNavigation, useToggle } from "../../../../hooks";
import { BorderRadius, OptionsMenu, OptionsMenuButton } from "../../../../ui";

export const BrokerCard = ({ broker }) => {
  const { navigateTo } = useNavigation();
  const anchorRef = useRef(null);
  const {
    isOpened: isCardMenuOpened,
    open: openCardMenu,
    close: closeCardMenu,
  } = useToggle();

  const brokerOptions = Object.freeze([
    {
      action: "show-details",
      label: "Show details",
      onClick: () => navigateTo(`/app/brokers/${broker?.id}/details`),
    },
  ]);

  const handleOpenCardMenu = (event) => {
    anchorRef.current = event?.currentTarget;
    openCardMenu();
  };

  const handleCloseCardMenu = () => {
    anchorRef.current = null;
    closeCardMenu();
  };

  return (
    <Card sx={{ borderRadius: BorderRadius.MD }}>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="end"
          alignItems="center"
        >
          <Grid item>
            <OptionsMenuButton onClick={handleOpenCardMenu} />
            <OptionsMenu
              anchor={anchorRef?.current}
              isOpened={isCardMenuOpened}
              options={brokerOptions}
              onClose={handleCloseCardMenu}
            />
          </Grid>
        </Grid>

        <Stack
          direction="column"
          spacing={2}
          sx={{ paddingX: "16px" }}
          useFlexGap
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6">{broker?.name}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                {translateCountry(broker?.country)}
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
};

BrokerCard.propTypes = {
  broker: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    license: PropTypes.string,
    website: PropTypes.string,
    foundationYear: PropTypes.string,
  }).isRequired,
};
