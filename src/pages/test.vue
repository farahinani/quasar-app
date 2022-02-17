<template>
  <div class="q-pa-md">
    <!-- <q-form @submit="submitForm">
      <q-input
        min="0"
        type="number"
        placeholder="Enter cartons purchased"
        outlined
        bottom-slots
        clearable
        v-model="formData.cartonInput"
        :rules="[(val) => !!val || 'Field is required']"
      />

      <div>
        <q-btn
          type="submit"
          label="Submit"
          color="primary"
          push
          :disable="!formData.cartonInput"
          @click="submitForm()"
        />
      </div>
    </q-form> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "test",

  setup() {
    const $q = useQuasar();

    $q.platform.is.desktop;
    $q.platform.is.android;
    $q.platform.is.ios;

    if (
      $q.platform.is.ios ||
      $q.platform.is.android ||
      $q.platform.is.desktop
    ) {
      if ($q.platform.is.ios) {
        // getAccel();
        DeviceMotionEvent.requestPermission().then((response) => {
          if (response == "granted") {
            getAccel();
          } else {
            alert("response is not granted");
          }
        });
      } else if ($q.platform.is.android) {
        getAccel();
      } else {
        console.log("platform is desktop");
      }
    }

    function getAccel() {
      var oldx = 0;
      var oldy = 0;

      var shakethreshold = 25;

      window.addEventListener("devicemotion", (event) => {
        if (
          Math.abs(oldx - Math.round(event.acceleration.x)) > shakethreshold ||
          Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
        ) {
          //shaken, do something
          alert("shaken !");
          if (this.$root.triesCount < this.$root.numTries) {
            this.$root.triesCount++;
            alert("shaken !! : try " + this.$root.triesCount);
          }
        }
        oldx = Math.round(accel.x);
        oldy = Math.round(accel.y);
      });
    }

    return {
      getAccel,
    };
  },

  // data() {
  //   return {
  //     formData: {
  //       cartonInput: "",
  //     },
  //   };
  // },

  // methods: {
  //   submitForm() {
  //     let numPacks = this.formData.cartonInput;

  //     let numTries = numPacks / 2;

  //     if (numTries < 1) {
  //       alert("please purchase at least 2 packs");
  //     } else if (numTries >= 1) {
  //       let numTriesInt = Math.floor(numTries);

  //       alert("Number of Tries:" + " " + numTriesInt);
  //     }
  //   },
  // },

  // setup() {
  //   const $q = useQuasar();

  //   $q.platform.is.android;
  //   $q.platform.is.ios;

  //   if ($q.platform.is.ios) {
  //     alert("alert: this is ios");

  //     function getAccel() {
  //       var oldx = 0;
  //       var oldy = 0;

  //       var shakethreshold = 20;

  //       DeviceMotionEvent.requestPermission().then((response) => {
  //         if (response == "granted") {
  //           window.addEventListener("devicemotion", (event) => {
  //             if (
  //               Math.abs(oldx - Math.round(event.acceleration.x)) >
  //                 shakethreshold ||
  //               Math.abs(oldy - Math.round(event.acceleration.y)) >
  //                 shakethreshold
  //             ) {
  //               alert("shaken !");
  //             }
  //             oldx = Math.round(accel.x);
  //             oldy = Math.round(accel.y);
  //           });

  //           window.addEventListener("deviceorientation", (event) => {
  //             console.log(event);
  //           });
  //         }
  //       });
  //     }

  //     return {
  //       getAccel,
  //     };
  //   } else if ($q.platform.is.android) {
  //     alert("This is android!");

  //     var oldx = 0;
  //     var oldy = 0;
  //     var shakethreshold = 20;

  //     window.addEventListener("devicemotion", (event) => {
  //       if (
  //         Math.abs(oldx - Math.round(event.acceleration.x)) > shakethreshold ||
  //         Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
  //       ) {
  //         alert("shaken !");
  //       }
  //       oldx = Math.round(accel.x);
  //       oldy = Math.round(accel.y);
  //     });
  //   } else {
  //     alert("this is dekstop!");
  //   }
  // },
});
</script>


