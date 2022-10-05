export interface Product {
    id: string;
    nameProduct: string;
  }
  
  
  export interface ProductResult {
    success: boolean;
    message: string;
    data: Product[];
  }
  