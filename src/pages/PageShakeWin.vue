<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">
            <div class="text-h5 text-center">
              You have : {{ $root.numTries }} tries
              <q-badge color="teal-10" align="middle">
                {{ $root.triesCount }}/{{ $root.numTries }}
              </q-badge>
            </div>
          </div>

          <div v-if="$q.platform.is.desktop">rendered on Desktop!</div>

          <div v-if="$q.platform.is.ios">
            Please press button "Start shake"<br />
            <q-btn
              id="accelPermsButton"
              color="primary"
              @click="getAccel()"
              label="Start Shake"
            >
            </q-btn>
          </div>
          <br />
          <q-btn
            type="submit"
            label="SHAKE BUTTON"
            color="primary"
            class="full-width"
            @click="shakeSuccess()"
          />

          <div v-if="$q.platform.is.android">rendered on android</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "PageShakeWin",

  setup() {
    const $q = useQuasar();

    $q.platform.is.desktop;
    $q.platform.is.android;
    $q.platform.is.ios;

    if ($q.platform.is.ios) {
      alert("alert: this is ios");
      //console.log("msg: this is desktop");

      function getAccel() {
        var oldx = 0;
        var oldy = 0;

        var shakethreshold = 25;

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
                // alert("shaken !");
                shakeSuccess();
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
      var shakethreshold = 25;

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

  methods: {
    shakeSuccess() {
      //JOANNE's code
      if (this.$root.triesCount < this.$root.numTries) {
        this.$root.triesCount++;

        if (this.$root.triesCount < this.$root.numTries) {
          alert("shaken !! : try " + this.$root.triesCount);
        } else {
          alert("Last Shake");
        }
      }
    },
  },
});
</script>
