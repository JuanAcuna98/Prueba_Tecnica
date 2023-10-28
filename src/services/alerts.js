import Swal from "sweetalert2";

export const AlertError = (message, icon, title) => {
  const alerta = Swal.fire({
    customClass: {
      container: "z-index",
    },
    icon: icon || "error",
    title: title || "ERROR",
    text: message,
  });
  return alerta;
};

export const AlertMessage = (message, icon) => {
  const alerta = Swal.fire({
    customClass: {
      container: "z-index",
    },
    icon: icon || "success",
    text: message,
  });
  return alerta;
};

export const AlertSuccess = (message, time) => {
  const alerta = Swal.fire({
    customClass: {
      container: "z-index",
    },
    position: "center",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: time || 2000,
  });
  return alerta;
};

export const AlertCharging = (message) => {
  const alerta = Swal.fire({
    customClass: {
      container: "z-index",
    },
    title: "Cargando",
    html: message || "Por favor espera un momento...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  return alerta;
};

export const AlertDelete = async () => {
  return await Swal.fire({
    title: "Eliminar Registro",
    html: "¿Estas seguro que quieres eliminar este registro?",
    icon: "warning",
    showDenyButton: true,
    confirmButtonText: "Si, Eliminar",
    denyButtonText: `No, Cancelar`,
    confirmButtonColor: "#1300FD",
    denyButtonColor: "#E32C6D",
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};