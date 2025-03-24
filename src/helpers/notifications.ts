import { toast, Id } from "react-toastify";

export class NotificationService {
  static success = (message: string = "Successfuly") => toast.success(message);

  static loading = (message: string = "Loading...") => toast.loading(message);

  static error = (message: string = "Error!") => toast.error(message);

  static updateToSuccess = (toastId: Id, message: string = "Error!") =>
    toast.update(toastId, {
      type: "success",
      render: message,
      isLoading: false,
      autoClose: 5000,
    });

  static updateToError = (toastId: Id, message: string = "Error!") =>
    toast.update(toastId, {
      type: "error",
      render: message,
      isLoading: false,
      autoClose: 5000,
    });
}
