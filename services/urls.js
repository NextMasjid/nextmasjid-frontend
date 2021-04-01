export const URLS = {
  REGION_URL: `/api/Province`,
  CITIES_URL: (lang, cityId) => `/api/v1/${lang}/region/${cityId}/City`,
  HEAT_MAP_URL: ({neLat, neLng, swLat, swLng}) => `/api/Score/GetByBound/${swLat}/${swLng}/${neLat}/${neLng}/14`,
  CURRENT_LOCATION_URL: ({lat, lng, lang}) => `api/Score/GetByPoint/${lat}/${lng}`,
  EDITOR_SUGGESTION_URL: `/api/EditorChoice`,
  CURRENT_MOSQUES_URL: ({neLat, neLng, swLat, swLng}) => `/api/Masjid/Get/${swLat}/${swLng}/${neLat}/${neLng}`,
  MOSQUE_DETAILS_URL: ({lat, lng, lang}) => `/api/Score/GetByPointDetails/${lang}/${lat}/${lng}`
}