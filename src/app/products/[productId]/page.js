const ProductDetails = async ({ params, searchParams }) => {
  const productId = await params.productId;
  const category = await searchParams.category;

  return (
    <div>
      ProductDetails{productId} {category}
    </div>
  );
};

export default ProductDetails;
