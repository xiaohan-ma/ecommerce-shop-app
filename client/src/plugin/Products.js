import axios from "axios";

export async function retrieveAllProducts() {
  try {
    const res = await axios.get("/products");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function retrieveProduct(productId) {
  try {
    const res = await axios.get(`/products/${productId}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function retrieveByCategory(category) {
  try {
    const res = await axios.get(
      `/products/category?genderCategory=${category}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function retrieveFeatured() {
  try {
    const res = await axios.get("/products?featured=true");
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateProduct(productId) {
  try {
    const res = await axios.get(`/products/${productId}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
