import { IconButton } from "@mui/material";

import { useNavigation } from "../../hooks";
import { Icon, Icons } from "../Icon";

export const GoBackButton = () => {
  const { goBack } = useNavigation();

  return (
    <IconButton onClick={goBack}>
      <Icon name={Icons.GO_BACK} />
    </IconButton>
  );
};
