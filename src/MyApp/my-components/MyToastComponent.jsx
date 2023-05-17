import { ToastContainer } from "react-toastify";

const MyToastComponent = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={false}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export default MyToastComponent;
