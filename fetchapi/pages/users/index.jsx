import useSWR from "swr";
import Link from "next/link";
const fetcher = (...zr) => fetch(...zr).then((res) => res.json());
const Users = () => {
  const { data, error } = useSWR("https://dummyjson.com/user", fetcher);
  if (error) {
    return <h1>Error Happending!</h1>;
  }
  if (!data) {
    return <h1>Loading...</h1>;
  }

  //   const [user, setUsers] = useState([]);

  //   console.log("Users", user);
  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const data = await fetch("https://dummyjson.com/user");
  //       setUsers(await data.json());
  //     };
  //     fetchUsers();
  //   }, []);
  return (
    <div>
      <h1>Users</h1>
      {data &&
        data.users.map((use) => (
          <Link href={`users/${use.id}`} key={use.id}>
            <div>{use.firstName}</div>
          </Link>
        ))}
    </div>
  );
};

export default Users;
