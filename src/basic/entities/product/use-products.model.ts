// TODO: 상품 관리 Hook
// 힌트:
// 1. 상품 목록 상태 관리 (localStorage 연동 고려)
// 2. 상품 CRUD 작업
// 3. 재고 업데이트
// 4. 할인 규칙 추가/삭제
//
// 반환할 값:
// - products: 상품 배열
// - updateProduct: 상품 정보 수정
// - addProduct: 새 상품 추가
// - updateProductStock: 재고 수정
// - addProductDiscount: 할인 규칙 추가
// - removeProductDiscount: 할인 규칙 삭제

import { useLocalStorage } from '../../shared/hooks/use-local-storage';
import {
  INITIAL_PRODUCTS,
  PRODUCT_STORAGE_KEY,
} from './product-constants.config';
import { ProductWithUI } from './product-interface.model';

export function useProducts() {
  const [products, setProducts] = useLocalStorage<ProductWithUI[]>(
    PRODUCT_STORAGE_KEY,
    INITIAL_PRODUCTS,
  );

  const updateProduct = () => {};

  const addProduct = () => {};

  const updateProductStock = () => {};

  const addProductDiscount = () => {};

  const removeProductDiscount = () => {};

  return {
    products,
    updateProduct,
    addProduct,
    updateProductStock,
    addProductDiscount,
    removeProductDiscount,
  };
}
