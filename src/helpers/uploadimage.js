import storage from '@react-native-firebase/storage';

export default (file) => (onSuccess) => (onError) => {
  const date = new Date();
  let imageType;

  if (file.mime === 'image/png') {
    imageType = '.png';
  } else {
    imageType = '.jpg';
  }

  const filename =
    file.creationDate === undefined
      ? file.modificationDate === undefined
        ? `${date.getTime()}`
        : file.modificationDate
      : file.creationDate;
  const path = 'contact-pictures/user/777/' + filename + imageType;
  const ref = storage().ref(path);

  const task = ref.putFile(file.path);

  task
    .then(async () => {
      const url = await ref.getDownloadURL();
      onSuccess(url);
      console.log('url', url);
    })
    .then((error) => {
      onError(error);
    });
};
