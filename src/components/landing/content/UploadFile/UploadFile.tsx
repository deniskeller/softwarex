import React from 'react';
import { useDropzone } from 'react-dropzone';
import s from './UploadFile.module.scss';

interface FileInputProps {
  files: File[];
  multiple?: boolean;
  title?: string;
  accept?: string;
  error?: string | boolean;
  className?: string;
  onChange(files: File[]): void;
}

const UploadFile: React.FC<FileInputProps> = ({
  files,
  onChange,
  multiple = false,
  title = '',
  accept = '.pdf, .txt',
  error,
  className = '',
}) => {
  function onDeleteFile(lastModified: number) {
    const newArr = files.filter((file) => file.lastModified !== lastModified);
    onChange(newArr);
  }

  const uploadDropFile = React.useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles);
    },
    [onChange]
  );

  function onDropFunc(files: File[]) {
    if (files.length > 1 && multiple === true) {
      uploadDropFile(files);
    } else {
      uploadDropFile([files[0]]);
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFunc,
  });

  //обрезание строки до 15 символов
  const computedName = (file: string) => {
    if (file.length > 15) {
      const fileName = file.split('.')[0];
      const fileType = file.split('.')[1];
      const newStr = fileName.substring(0, 15);
      return newStr + '...' + '.' + fileType;
    }
    return file;
  };

  return (
    <>
      <div className={`${s.FileInput} ${className}`}>
        {files?.length > 0 ? (
          files.map((file) => {
            return (
              <>
                <div className={s.UploadFile} key={file?.name}>
                  <p className={s.UploadFile_Title}>
                    {computedName(file.name)}
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13 13"
                    fill="none"
                    className={s.UploadFile_Delete}
                    onClick={() => onDeleteFile(file.lastModified)}
                  >
                    <path
                      opacity="0.3"
                      d="M1.25 11.75L11.75 1.25M1.25 1.25L11.75 11.75"
                      stroke="#1F1E58"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            );
          })
        ) : (
          <>
            <div
              className={`${s.Empty} ${isDragActive ? s.Empty__Active : ''} ${
                error ? s.Empty__Error : ''
              }`}
              {...getRootProps()}
            >
              <input
                {...getInputProps()}
                hidden
                accept={accept}
                multiple={multiple}
              />

              <p className={s.Empty_Title}>{title}</p>
            </div>

            {error ? (
              <div className={s.ErrorText}>
                <p>{error}</p>
              </div>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default UploadFile;
