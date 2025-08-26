const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export async function getData(queryString) {
  console.log(`${API_URL}/${queryString}`);
  try {
    const response = await fetch(`${API_URL}/${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
