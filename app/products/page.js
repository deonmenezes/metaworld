import { ProductsGridcom } from '../../sections';

const ProductsPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <main className="relative flex items-center justify-center min-h-screen">
      <div className=" min-w-[70vw] shadow-lg backdrop-blur-md  p-10 rounded-lg">
        <div className="p-6">
          <h1 className="text-2xl mt-10 font-bold mb-6 text-white text-center">Our Products</h1>
          <div>
            <ProductsGridcom />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default ProductsPage;
