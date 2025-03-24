import { t } from "i18next";
import { toast, Id } from "react-toastify";

export class NotificationService {
  static success = (message: string = "Successfuly") =>
    toast.success(t(message));

  static loading = (message: string = "Loading...") =>
    toast.loading(t(message));

  static error = (message: string = "Error!") => toast.error(t(message));

  static updateToSuccess = (toastId: Id, message: string = "Error!") =>
    toast.update(toastId, {
      type: "success",
      render: t(message),
      isLoading: false,
      autoClose: 5000,
    });

  static updateToError = (toastId: Id, message: string = "Error!") =>
    toast.update(toastId, {
      type: "error",
      render: t(message),
      isLoading: false,
      autoClose: 5000,
    });
}
