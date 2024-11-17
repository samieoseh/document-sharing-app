import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./hooks/useAxiosPrivate";

function App() {
  const axiosPrivate = useAxiosPrivate();

  const { data } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const { data } = await axiosPrivate.get("/");
      return data;
    },
  });

  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}

export default App;
