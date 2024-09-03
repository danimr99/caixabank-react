/** @import {Broker} from "../docs" */

/**
 * Maps the broker data from the API to the Broker type.
 *
 * @function
 * @param {object} broker - The broker data from the API.
 * @returns {Broker} - The broker data mapped.
 */
export const mapBrokerData = (broker) => {
  return {
    id: broker?.id,
    name: broker?.nombre,
    country: broker?.pais,
    address: broker?.direccion,
    phone: broker?.telefono,
    email: broker?.email,
    license: broker?.licencia,
    foundationYear: broker?.activo_desde,
    website: broker?.sitio_web,
  };
};
