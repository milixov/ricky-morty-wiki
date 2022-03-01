import type { NextPage } from 'next';

//components
import CharacterCard from 'src/components/CharacterCard';
import MainLayout from 'src/containers/MainLayout';

//services
import { useQueryCharactersPaginated } from 'src/services';

//style
import styles from 'src/styles/Home.module.scss';

const Home: NextPage = () => {
  const { data, isFetching } = useQueryCharactersPaginated(1);

  return (
    <MainLayout title="List of Characters">
      <div className={styles.container}>
        {data?.results?.map((character) => (
          <CharacterCard key={`character_${character?.id}`} data={character} />
        ))}
        <CharacterCard skeleton={isFetching} />
        <CharacterCard skeleton={isFetching} />
        <CharacterCard skeleton={isFetching} />
      </div>
    </MainLayout>
  );
};

export default Home;
