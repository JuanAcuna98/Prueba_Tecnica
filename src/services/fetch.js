import Swal from "sweetalert2";
import { AlertCharging, AlertError } from "./alerts";

const url = import.meta.env.VITE_API_URL;

export const customFetch = async ({
  endpoint,
  method = "GET",
  token,
  body,
  formdata = false,
  isLoader = true,
}) => {
  isLoader && AlertCharging("Cargando por favor espere...");
  return await fetch(url + endpoint, {
    method: method,
    headers: formdata
      ? {
          Authorization: token,
        }
      : {
          Authorization: token,
          "Content-Type": "application/json",
        },
    body: formdata ? body : JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        Swal.close()
        return res;
      }else{
        AlertError(res.message);
        return res;
      }
    })
    .catch((err) => {
      AlertError("Error. Contacte con soporte", err);
    });
};