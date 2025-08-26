import {
  verifyAuthSession,
} from "@/backend/db/auth";

const UserProfilePage = async () => {
  const {
    user,
  } = await verifyAuthSession();

  return (
    <>
      <h1>
        User Profile
      </h1>
      <p>
        {`User: ${ user?.id}`}
      </p>
    </>
  );
};

export default UserProfilePage;
