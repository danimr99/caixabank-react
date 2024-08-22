import { Link } from "@mui/material";

import { useNavigation } from "../../hooks";
import { Icons, Spacing } from "..";
import { Icon } from "../Icon";

export const GoBackButton = () => {
  const { goBack } = useNavigation();

  return (
    <Link
      component="button"
      underline="hover"
      onClick={goBack}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: Spacing.XS,
      }}
    >
      <Icon name={Icons.GO_BACK} />
      Go back
    </Link>
  );
};
