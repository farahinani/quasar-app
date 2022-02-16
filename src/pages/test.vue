<template>
  <div class="q-pa-md">
    <div class="q-mb-md">
      Browser User Agent: "<strong>{{ $q.platform.userAgent }}</strong
      >"
    </div>

    <q-markup-table flat bordered>
      <thead>
        <tr>
          <th class="text-left">Property</th>
          <th class="text-left">Value</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(value, prop) in $q.platform.is" :key="prop">
          <td>{{ prop }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </q-markup-table>

    <div class="q-mt-md">
      The device which you are using to view this website
      <strong>{{ touch }}</strong> touch capability.
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { computed } from "vue";

export default defineComponent({
  name: "test",

  setup() {
    const $q = useQuasar();

    return {
      touch: computed(() => ($q.platform.has.touch ? "has" : "does not have")),
    };
  },

  // methods: {
  //   getAccel() {
  //     var oldx = 0;
  //     var oldy = 0;

  //     var shakethreshold = 30;

  //     DeviceMotionEvent.requestPermission().then((response) => {
  //       if (response == "granted") {
  //         window.addEventListener("devicemotion", (event) => {

  //           if (
  //             Math.abs(oldx - Math.round(event.acceleration.x)) >
  //               shakethreshold ||
  //             Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
  //           ) {
  //             alert("shaken");
  //           }
  //           oldx = Math.round(accel.x);
  //           oldy = Math.round(accel.y);
  //         });

  //         window.addEventListener("deviceorientation", (event) => {
  //           console.log(event);
  //         });
  //       }
  //     });
  //   },
  // },
});
</script>


