import { useRouteError } from "react-router-dom";

export default () => {
  const error = useRouteError();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "red",
      }}
    >
      {error?.message ?? "An error occurred"}
    </div>
  );
};
