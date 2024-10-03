import { redirect } from "next/navigation";

const NotFound = () => {
  redirect("/posts");
};

export default NotFound;
