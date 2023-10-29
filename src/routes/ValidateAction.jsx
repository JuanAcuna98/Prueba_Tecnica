import { useSelector } from "react-redux";

const ValidateAction = ({ children, permissions }) => {
  const auth = useSelector((state) => state.auth);
  const isAllowed = permissions
    ? permissions.some((item) => item)
    : true;

  return isAllowed ? children : null;
};

export default ValidateAction;