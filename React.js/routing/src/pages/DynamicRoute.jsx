import { useParams } from "react-router-dom";

const DynamicRoute = () => {
  const { value } = useParams();

  if (!isNaN(value)) {
    return <h1>The Number is: {value}</h1>;
  }

  return <h1>The Word is: {value}</h1>;
};

export default DynamicRoute;