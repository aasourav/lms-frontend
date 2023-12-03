import { publicApiRequest } from "../../../../src/api/apiRequest";
import {
  IGoogleMapAddressDetailsResponse,
  IGoogleMapAddressResult,
} from "../../../../src/types/location";
import { GOOGLE_MAPS_API_KEY_SERVER } from "../../../../src/utils/config";

async function getLocationDetails(
  placeId: string,
  sessionToken: string
): Promise<IGoogleMapAddressResult> {
  const apiKey = GOOGLE_MAPS_API_KEY_SERVER;
  const fields = "formatted_address,geometry";

  return new Promise<IGoogleMapAddressResult>((resolve) => {
    publicApiRequest
      .get<IGoogleMapAddressDetailsResponse>(
        `https://maps.googleapis.com/maps/api/place/details/json?&key=${apiKey}&place_id=${placeId}&fields=${fields}&sessiontoken=${sessionToken}`
      )
      .then((resp) => {
        const data = resp.data;
        let result: IGoogleMapAddressResult | undefined;
        if (data.result) {
          result = {
            geometry: data.result.geometry,
            formattedAddress: data.result.formatted_address,
          };
          resolve(result);
        }
      })
      .catch(() => {
        return;
      });
  });
}

export default async function handler(req, res) {
  const { placeId, sessionToken } = req.body;
  const details = await getLocationDetails(placeId, sessionToken);
  return res.json(details);
}
