import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ProductsData } from '../mock/products'

type ProductStore = {
  products: any[]
  addToList: (product: any) => void
  removeFromList: (product: number) => void
}

const useProductStore = create<ProductStore>()(persist((set) => ({
    products: ProductsData,
    addToList(product: any) {
        set((state) => ({
            products: [...state.products, product],
        }))
    },
    removeFromList(productId: number) {
        set((state) => ({
            products: state.products.filter(
                (product) => product?.id !== productId,
            ),
        }))
    },
}), {
    name: '@tyear_products',
}))

export default useProductStore