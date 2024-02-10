import { useFetchEbooks } from "hooks/useEbooks";

const MainView = () => {
  const { data, isLoading } = useFetchEbooks();

  if (isLoading) return <h1>Loading...</h1>;

  console.log(data);

  return (
    <>
      <h1>Main View</h1>
    </>
  );
};
export default MainView;
