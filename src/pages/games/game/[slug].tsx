import { useRouter } from 'next/router';
import { ContentContainer } from '@/components/content-container';
import { wrapper } from '@/store';
import { getGame, useGetGameQuery } from '@/store/api/games';

export default function GamePage() {
  const slug = useRouter().query.slug;
  const { data, isLoading, error } = useGetGameQuery({ slug: slug as string });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <ContentContainer>
      <h1>{data?.title}</h1>
      <h2>{data?.providerName}</h2>
      <p>Ahm....some pretty page with the game. Normally loading an i-frame </p>
    </ContentContainer>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const slug = context.params?.slug;
    await store.dispatch(getGame.initiate({ slug: slug as string }));
    return {
      props: {},
    };
  },
);
