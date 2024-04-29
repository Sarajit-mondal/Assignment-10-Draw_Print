import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
const success = (name) => {
  Swal.fire({
    title: name,
    text: "Do you want to continue",
    icon: "success",
    confirmButtonText: "Ok",
  });
};
const errow = (name) => {
  Swal.fire({
    title: name,
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Ok",
  });
};

export { success, errow };
