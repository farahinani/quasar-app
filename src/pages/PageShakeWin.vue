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

          <div v-if="$q.platform.is.ios">
            Please press button "Start shake"<br />
            <q-btn
              id="accelPermsButton"
              color="primary"
              @click="permission()"
              label="SHAKE PERMISSION"
            >
            </q-btn>
          </div>
          <q-btn
            type="submit"
            label="SHAKE BUTTON"
            color="primary"
            class="full-width"
            @click="shakeSuccess()"
          />
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

    if (
      $q.platform.is.ios ||
      $q.platform.is.android ||
      $q.platform.is.desktop
    ) {
      if ($q.platform.is.ios) {
        function permission() {
          DeviceMotionEvent.requestPermission().then((response) => {
            if (response == "granted") {
              getAccel();
            } else {
              alert("response is not granted");
            }
          });
        }
        return {
          permission,
        };
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

      // window.addEventListener("devicemotion", (event) => {
      //   if (
      //     Math.abs(oldx - Math.round(event.acceleration.x)) > shakethreshold ||
      //     Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
      //   ) {
      //     alert("shaken !"); // do something
      //   }
      //   oldx = Math.round(accel.x);
      //   oldy = Math.round(accel.y);
      // });

      if (this.$root.triesCount < this.$root.numTries) {
        this.$root.triesCount++;

        // window.addEventListener("devicemotion", (event) => {
        //   if (
        //     Math.abs(oldx - Math.round(event.acceleration.x)) >
        //       shakethreshold ||
        //     Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
        //   ) {
        //     alert("shaken !"); // do something
        //   }
        //   oldx = Math.round(accel.x);
        //   oldy = Math.round(accel.y);
        // });

        if (this.$root.triesCount < this.$root.numTries) {
          window.addEventListener("devicemotion", (event) => {
            if (
              Math.abs(oldx - Math.round(event.acceleration.x)) >
                shakethreshold ||
              Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
            ) {
              // alert("shaken !"); // do something
              alert("shaken !! : try " + this.$root.triesCount);
            }
            oldx = Math.round(accel.x);
            oldy = Math.round(accel.y);
          });
        } else {
          alert("Last Shake");
        }
      }
    }
    return {
      getAccel,
    };
  },

  methods: {
    shakeSuccess() {
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
