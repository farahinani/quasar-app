<template>
  <div class="q-pa-md">
    <!-- <div v-if="$q.platform.is.desktop">rendered on Desktop!</div>
    <div v-if="$q.platform.is.ios">
      Please press button "Start shake"<br />
      <q-btn
        id="accelPermsButton"
        color="primary"
        @click="getAccel()"
        label="Start Shake"
      >
      </q-btn>
    </div> -->

    <!-- <form>
      Number of Cartons:
      <input type="number" name="fname" id="packCount" /><br />
      <input type="button" @click="myFunction()" value="Submit" />
    </form> -->

    <q-form @submit="submitForm">
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

      <!-- <div>number of tries : {{ numPacks }}</div> -->
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "test",

  data() {
    return {
      formData: {
        cartonInput: "",
      },
    };
  },

  methods: {
    submitForm() {
      // alert("your carton : " + this.formData.cartonInput);
      let numPacks = this.formData.cartonInput;

      let numTries = numPacks / 2;

      if (numTries < 1) {
        alert("please purchase at least 2 packs");
      } else if (numTries >= 1) {
        let numTriesInt = Math.floor(numTries);

        alert("Number of Tries:" + " " + numTriesInt);
      }
    },
  },

  setup() {
    const $q = useQuasar();

    // $q.platform.is.desktop;
    $q.platform.is.android;
    $q.platform.is.ios;

    if ($q.platform.is.ios) {
      alert("alert: this is ios");
      //console.log("msg: this is desktop");

      function getAccel() {
        var oldx = 0;
        var oldy = 0;

        var shakethreshold = 20;

        DeviceMotionEvent.requestPermission().then((response) => {
          if (response == "granted") {
            window.addEventListener("devicemotion", (event) => {
              // console.log(event);

              if (
                Math.abs(oldx - Math.round(event.acceleration.x)) >
                  shakethreshold ||
                Math.abs(oldy - Math.round(event.acceleration.y)) >
                  shakethreshold
              ) {
                //shaken, do something
                alert("shaken !");
              }
              oldx = Math.round(accel.x);
              oldy = Math.round(accel.y);
            });

            window.addEventListener("deviceorientation", (event) => {
              console.log(event);
            });
          }
        });
      }

      return {
        getAccel,
      };
    } else if ($q.platform.is.android) {
      //console.log("This is android");
      alert("This is android!");

      var oldx = 0;
      var oldy = 0;
      var shakethreshold = 20;

      window.addEventListener("devicemotion", (event) => {
        // console.log(event);

        if (
          Math.abs(oldx - Math.round(event.acceleration.x)) > shakethreshold ||
          Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
        ) {
          //shaken, do something
          alert("shaken !");
        }
        oldx = Math.round(accel.x);
        oldy = Math.round(accel.y);
      });
    } else {
      alert("this is dekstop!");
    }
  },
});
</script>


