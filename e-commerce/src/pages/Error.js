import { useRouteError } from "react-router-dom";
import Header from "../components/UI/Header";

const Error = () => {
  const error = useRouteError();

  let title = "An error occured";
  let message = "Could not find this page";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not Found!";
    message = "could not find resource or page";
  }

  return (
    <>
      <Header />
      <main style={{ textAlign: "center" }}>
        <h1>{title}</h1>
        <p>{message}</p>
      </main>
    </>
  );
};

export default Error;
