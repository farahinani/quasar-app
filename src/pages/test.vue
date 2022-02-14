<template>
  <div>
    <q-btn color="primary" label="Get Picture" @click="captureImage" />
    <img :src="imageSrc" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Camera, CameraResultType } from "@capacitor/camera";

export default defineComponent({
  name: "test",

  setup() {
    const imageSrc = ref("");

    async function captureImage() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });

      // The result will vary on the value of the resultType option.
      // CameraResultType.Uri - Get the result from image.webPath
      // CameraResultType.Base64 - Get the result from image.base64String
      // CameraResultType.DataUrl - Get the result from image.dataUrl
      imageSrc.value = image.webPath;
    }

    return {
      imageSrc,
      captureImage,
    };
  },
});
</script>


