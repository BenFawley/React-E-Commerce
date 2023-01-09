const FIREBASE_DOMAIN =
  "https://react-e-commerce-f5165-default-rtdb.europe-west1.firebasedatabase.app/";

export const getProducts = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "951ae0ae03msh15b713d7db634b9p1a7e26jsne6ccf99148eb",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  const response = await fetch(
    "https://asos2.p.rapidapi.com/products/v2/list?limit=48&categoryId=6993&offset=0&store=COM&lang=en-GB&sizeSchema=UK&currency=GBP&sort=freshness&country=GB",
    options
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  const products = [...data.products];

  return products;
};

export const getCategories = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "951ae0ae03msh15b713d7db634b9p1a7e26jsne6ccf99148eb",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  const response = await fetch(
    "https://asos2.p.rapidapi.com/categories/list?country=GB&lang=en-GB",
    options
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch categories.");
  }

  return console.log(data);
};
