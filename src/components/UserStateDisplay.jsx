import { useUserContext } from "../context/UserContext";

export const UserStateDisplay = () => {
  // State / var
  const { currentUser, mode } = useUserContext();

  // func

  // return

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div>{currentUser.name}</div>
      <div>{mode}</div>
    </div>
  );
};
