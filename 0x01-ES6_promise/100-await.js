import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
  let response = {};

  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    response = { photo, user };
  } catch (error) {
    response = { photo: null, user: null };
  }

  return response;
}
