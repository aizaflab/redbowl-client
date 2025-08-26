export default function buildQueryParams(params) {
  const queryParts = [];

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const value = params[key];

      // Skip null, undefined, and empty string
      if (value !== null && value !== undefined && value !== "") {
        queryParts.push(`${key}=${encodeURIComponent(String(value))}`);
      }
    }
  }

  return queryParts.join("&");
}
