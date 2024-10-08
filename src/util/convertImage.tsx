export const convertFilesToBase64 = (files: File[]): Promise<string[]> => {
  return Promise.all(
    files.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
      });
    })
  );
};

export const convertFileToBase64 = async (file: File | null): Promise<string> => {
  console.log(file)
  let resp = await  new Promise((resolve, reject) => {
    if (!file) {
      resolve(""); // or resolve(null) depending on what you want for empty inputs
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

  return resp as string
};

export function base64ToFile(
  base64String: string,
  fileName: string,
  mimeType: string
): File {
  // Split the base64 string to remove the "data:" prefix and get the actual content
  const byteString = atob(base64String.split(",")[1]);

  // Create a Uint8Array from the Base64 decoded string
  const byteArray = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array
  const blob = new Blob([byteArray], { type: mimeType });

  // Convert the Blob into a File object
  const file = new File([blob], fileName, { type: mimeType });

  return file;
}
