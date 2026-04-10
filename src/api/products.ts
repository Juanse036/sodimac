import type { ApiResponse } from '../types/product';

const API_URL = 'https://apim-dev-proxy.sodhc.co/test-jasson/api/category';

export const getProducts = async (): Promise<ApiResponse> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};