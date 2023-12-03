import { publicApiRequest } from "../../../../src/api/apiRequest";
import { IReverseGeocoding } from "../../../../src/types/location";
import { GOOGLE_MAPS_API_KEY_SERVER } from "../../../../src/utils/config";

export async function getAddressFromCoordinates(
  lat: number,
  lon: number
): Promise<string> {
  const apiKey = GOOGLE_MAPS_API_KEY_SERVER;

  return new Promise<string>((resolve) => {
    publicApiRequest
      .get<IReverseGeocoding>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`
      )
      .then((resp) => {
        let formatted_address = "";
        for (const result of resp.data?.results) {
          const types = result.address_components[0].types;
          if (!types.includes("plus_code")) {
            formatted_address = result.formatted_address;
            break;
          }
        }
        resolve(formatted_address);
      })
      .catch(() => {
        return;
      });
  });
}

export default async function handler(req, res) {
  const { latitude, longitude } = req.body;
  const address = await getAddressFromCoordinates(latitude, longitude);
  return res.json({ address });
}
