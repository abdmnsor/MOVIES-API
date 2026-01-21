import { body } from "express-validator";

export function loginValidator() {
  return [
    body(`email`).notEmpty().withMessage(`email is required`),
    body(`email`).isEmail().withMessage(`Email Is Invalid`),
    body(`password`).notEmpty().withMessage(`password is required`),
  ];
}
