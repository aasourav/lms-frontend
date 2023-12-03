import { publicApiRequest } from "../../../../src/api/apiRequest";
import { TCountryCode } from "../../../../src/types/enums/countries";
import {
  IGoogleMapAddressList,
  IGoogleMapAddressListResponse,
} from "../../../../src/types/location";
import { GOOGLE_MAPS_API_KEY_SERVER } from "../../../../src/utils/config";

async function getLocationResults(
  address: string,
  sessionToken: string,
  countryCode?: TCountryCode,
  coordinates?: {
    latitude: number;
    longitude: number;
  }
): Promise<IGoogleMapAddressList> {
  const apiKey = GOOGLE_MAPS_API_KEY_SERVER;

  return new Promise<IGoogleMapAddressList>((resolve) => {
    if (address.length > 2) {
      const uri = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${apiKey}&sessiontoken=${sessionToken}${
        countryCode ? `&components=country:${countryCode}` : ""
      }${
        coordinates
          ? `&location=${coordinates.latitude},${coordinates.longitude}&radius=25000`
          : ""
      }`;

      publicApiRequest
        .get<IGoogleMapAddressListResponse>(uri)
        .then((resp) => {
          const addressList = resp.data;
          if (addressList.status === "OK") {
            const data = resp.data;
            const formattedData: IGoogleMapAddressList = {
              ...data,
              predictions: data.predictions.map((prediction) => ({
                description: prediction.description,
                placeId: prediction.place_id,
              })),
            };
            resolve(formattedData);
          } else {
            resolve({
              ...addressList,
              predictions: [],
            });
          }
        })
        .catch(() => {
          resolve({ status: "OK", predictions: [] });
        });
    } else {
      resolve({ status: "OK", predictions: [] });
    }
  });
}

export default async function handler(req, res) {
  const { address, sessionToken, countryCode, coordinates } = req.body;
  const addressList = await getLocationResults(
    address,
    sessionToken,
    countryCode,
    coordinates
  );
  return res.json(addressList);
}
