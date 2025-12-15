import BlogListing from '../../BlogListing';

interface PageParams {
  params: {
    page: string;
  };
}

export default async function BlogPageByNumber({ params }: PageParams) {
  const pageNumber = Number(params.page) || 1;
  const safePage = pageNumber < 1 ? 1 : pageNumber;

  return <BlogListing currentPage={safePage} />;
}


