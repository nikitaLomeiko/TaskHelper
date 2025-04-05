import { defineStore } from "pinia";
import { UploadedFile } from "../types";
import { ref } from "vue";

export const useFileStore = defineStore("file", () => {
  const files = ref<UploadedFile[]>([]);
  const isUploading = ref(false);

  const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      files.value = [...files.value, ...Array.from(target.files)];
    }
    target.value = "";
  };

  const removeFile = (index: number) => {
    files.value.splice(index, 1);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFormData = async () => {
    if (files.value.length === 0) return;

    isUploading.value = true;

    const formData = new FormData();
    files.value.forEach((file) => {
      if (file instanceof File || file instanceof Blob) {
        formData.append("files", file);
      } else {
        console.warn("Объект не является файлом:", file);
      }
    });

    return formData;
  };

  return {
    files,
    isUploading,
    handleFileChange,
    removeFile,
    formatFileSize,
    getFormData,
  };
});
