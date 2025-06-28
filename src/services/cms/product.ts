import { CacheTags } from "@/common/cache";
import { TCMSProduct } from "@/types/cms/db/product";
import { cmsRequest } from "../common";
import { fetchProductsQuery } from "./product.query";

type ProductsResponse = {
  products: TCMSProduct[];
};

export async function fetchProducts() {
  try {
    const data = await cmsRequest<ProductsResponse>(fetchProductsQuery, {}, [
      CacheTags.CMS_PRODUCTS,
    ]);
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
