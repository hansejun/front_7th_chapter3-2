import { useState } from 'react';
import { ToastProvider } from './shared/ui/toast/toast-context';
import { CartProvider } from './entities/cart/model/use-cart';
import { ProductProvider } from './entities/product';
import { CouponProvider } from './entities/coupon';
import { AdminPage } from './pages/admin/page';
import { CartPage } from './pages/cart/page';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <ToastProvider>
      <ProductProvider>
        <CouponProvider>
          <CartProvider>
            {isAdmin ? (
              <AdminPage onToggleAdmin={() => setIsAdmin(!isAdmin)} />
            ) : (
              <CartPage onToggleAdmin={() => setIsAdmin(!isAdmin)} />
            )}
          </CartProvider>
        </CouponProvider>
      </ProductProvider>
    </ToastProvider>
  );
};

export default App;
