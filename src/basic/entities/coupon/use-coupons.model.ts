// TODO: 쿠폰 관리 Hook
// 힌트:
// 1. 쿠폰 목록 상태 관리 (localStorage 연동 고려)
// 2. 쿠폰 추가/삭제
//
// 반환할 값:
// - coupons: 쿠폰 배열
// - addCoupon: 새 쿠폰 추가
// - removeCoupon: 쿠폰 삭제

import { Coupon } from '../../../types';
import { useLocalStorage } from '../../shared/hooks/use-local-storage';
import { COUPON_STORAGE_KEY, INITIAL_COUPONS } from './coupon-constants.config';

export function useCoupons() {
  const [coupons, setCoupons] = useLocalStorage<Coupon[]>(
    COUPON_STORAGE_KEY,
    INITIAL_COUPONS,
  );

  const addCoupon = () => {};
  const removeCoupon = () => {};
  return {
    coupons,
    addCoupon,
    removeCoupon,
  };
}
