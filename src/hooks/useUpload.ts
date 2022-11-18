//TODO: refactor this hook

const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

interface Props {
  onChange: (val: string) => void;
}

const useUpload = ({ onChange }: Props) => ({
  chooseFile() {
    // @ts-ignore
    const fileChooser = document.getElementById('filechooser');

    const onFileChange = async (val: any) => {
      const result = await toBase64(val.target.files[0]);
      onChange(result as string);
      fileChooser!.removeEventListener('change', onFileChange);
    };

    fileChooser!.click();
    fileChooser!.addEventListener('change', onFileChange);
  },
});

export default useUpload;
