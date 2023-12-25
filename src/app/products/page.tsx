import ProductReel from '@/components/ProductReel';
import MaxWidthWrapper from '@/src/components/MaxWidthWrapper';
import { PRODUCT_CATEGORIES } from '@/src/components/config';
import React from 'react';

type Param = string | string[] | undefined;
type Props = {
  searchParams: { [key: string]: Param };
};

const parse = (param: Param) => {
  return typeof param === 'string' ? param : undefined;
};

const ProductsPage = ({ searchParams }: Props) => {
  const sort = parse(searchParams.sort);
  const category = parse(searchParams.category);

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === category
  )?.label;

  return (
    <MaxWidthWrapper>
      <ProductReel
        title={label ?? 'Browse high-quality assets'}
        query={{
          category,
          limit: 40,
          sort: sort === 'desc' || sort === 'asc' ? sort : undefined,
        }}
      />
    </MaxWidthWrapper>
  );
};

export default ProductsPage;
