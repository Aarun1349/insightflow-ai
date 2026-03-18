export const FileUpload = (file: File) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const fileContent = event.target?.result;
    console.log(fileContent);
  };
  reader.readAsText(file);
}