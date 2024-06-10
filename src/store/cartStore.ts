import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CartStore = {
  products: any[]
  addToCart: (product: any) => void
  removeFromCart: (product: number) => void
}

const useCartStore = create<CartStore>()(persist((set) => ({
    products: [],
    addToCart(product: any) {
        set((state) => ({
            products: [...state.products, product],
        }))
    },
    removeFromCart(productId: number) {
        set((state) => ({
            products: state.products.filter(
                (product) => product?.id !== productId,
            ),
        }))
    },
}), {
    name: '@tyear_cart',
}))

export default useCartStore