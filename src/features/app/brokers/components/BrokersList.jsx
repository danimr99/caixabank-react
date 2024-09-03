import PropTypes from "prop-types";

import { GridList } from "../../../../ui";
import { BrokerCard } from "./BrokerCard";

export const BrokersList = ({ brokers = [] }) => {
  return (
    <GridList>
      {brokers?.map((broker) => (
        <BrokerCard key={broker?.id} broker={broker} />
      ))}
    </GridList>
  );
};

BrokersList.propTypes = {
  brokers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      address: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      license: PropTypes.string,
      website: PropTypes.string,
      foundationYear: PropTypes.string,
    })
  ),
};
