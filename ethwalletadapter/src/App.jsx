import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const getter = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  return json;
};
const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* Pass the queryClient instance to QueryClientProvider */}
      <QueryClientProvider client={queryClient}>
        <Posts />
      </QueryClientProvider>
    </>
  );
}
function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getter,
    refetchInterval: 1000,
  });
  if (isLoading) return "Loading...";
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
