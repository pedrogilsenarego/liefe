import {
  deleteObject,
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";

export const handleAddThumbnail = async (
  title: string,
  files: any,
  onProgressUpdate: (progress: number) => void
) => {
  const storage = getStorage();

  const a = Array.prototype.slice.call(files);
  const c: any = [];
  let incrementLoad = 100 / a.length;
  let loadProgress = 0;

  const uploadImageAsPromise = (imageFile: any) => {
    return new Promise<void>((resolve, reject) => {
      const storageRef = ref(storage, `products/${title}/${imageFile.name}`);
      uploadBytes(storageRef, imageFile)
        .then(() => {
          getDownloadURL(storageRef).then((url) => {
            console.log(url);
            loadProgress = loadProgress + incrementLoad;
            onProgressUpdate(~~loadProgress);
            c.push(url);
            resolve();
          });
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  };

  for (var i = 0; i < a.length; i++) {
    var imageFile = a[i];
    await uploadImageAsPromise(imageFile);
  }
  return c;
};

export const deleteStorageFolder = async (folderPath: string) => {
  try {
    const storage = getStorage();

    const listRef = ref(storage, folderPath);

    const files = await listAll(listRef);

    // Delete each file/object within the folder
    const deletePromises = files.items.map(async (fileRef) => {
      try {
        await deleteObject(fileRef);
        console.log(`Deleted file: ${fileRef.name}`);
      } catch (deleteError: any) {
        console.error(
          `Error deleting file ${fileRef.name}: ${deleteError.message}`
        );
      }
    });

    await Promise.all(deletePromises);

    // After all files are deleted, delete the folder
    try {
      await deleteObject(listRef);
      console.log(`Folder '${folderPath}' deleted.`);
    } catch (folderDeleteError: any) {
      console.error(`Error deleting folder: ${folderDeleteError.message}`);
    }
  } catch (error) {
    console.error("Error listing files in folder: ", error);
    throw error; // Propagate the error to handle it appropriately in the calling code.
  }
};
