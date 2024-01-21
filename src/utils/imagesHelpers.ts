export const handleConvertStringIntoFile = async (
  images: string[],
  setLoader: (signal: boolean) => void,
  setValue: (value: any) => void
) => {
  setLoader(true);
  // Create a new DataTransfer object
  const dataTransfer = new DataTransfer();

  // Function to convert base64 string to a file
  const base64StringToFile = async (
    base64String: string,
    filename: string
  ): Promise<File> => {
    const response = await fetch(base64String);
    const data = await response.blob();
    return new File([data], filename, { type: "image/webp" });
  };

  // Iterate through the images array and add each file to the DataTransfer object
  for (let i = 0; i < images.length; i++) {
    const file = await base64StringToFile(images[i], `image${i}.webp`); // You can replace the filename with any naming scheme you prefer
    dataTransfer.items.add(file);
  }
  setValue(dataTransfer.files);
  setLoader(false);
};
