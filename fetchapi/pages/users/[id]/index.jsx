import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const UserInfo = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState();
  console.log("userInfo", userInfo);
  useEffect(() => {
    const id = router.query.id;
    const getUserById = async () => {
      const data = await fetch(`https://dummyjson.com/user/${id}`);
      setUserInfo(await data.json());
    };
    getUserById();
  }, [router.query.id]);
  return (
    <>
      <h3>Briefly Detail of User</h3>
      <h5>{`ID number: ${router.query.id}`}</h5>
      <div>
        <p>{`FirstName: ${userInfo?.firstName}`}</p>
        <p>{`LastName: ${userInfo?.lastName}`}</p>
        <p>{`Age: ${userInfo?.age}`}</p>
        <p>{`Gender: ${userInfo?.gender}`}</p>
        <p>{`Phone: ${userInfo?.phone}`}</p>
        <p>{`University: ${userInfo?.university}`}</p>
        <p>{`Mail: ${userInfo?.email}`}</p>
      </div>
    </>
  );
};

export default UserInfo;
