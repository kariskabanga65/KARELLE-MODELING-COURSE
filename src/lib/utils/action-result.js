import { z } from "zod";

const SENSITIVE_FIELD = /password|token/i;

export function actionSuccess(message, data = {}) {
  return { success: true, message, ...data };
}

export function actionError(error, fieldErrors = {}, values = {}) {
  return { success: false, error, fieldErrors, values: removeSensitiveFields(values) };
}

export function validationError(zodError, values = {}, message = "Periksa kembali data yang Anda isi.") {
  return actionError(message, z.flattenError(zodError).fieldErrors, values);
}

export function formDataToObject(formData) {
  const result = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string" && !key.startsWith("$ACTION")) result[key] = value;
  }
  return result;
}

function removeSensitiveFields(values) {
  return Object.fromEntries(
    Object.entries(values ?? {}).filter(([key]) => !SENSITIVE_FIELD.test(key)),
  );
}
