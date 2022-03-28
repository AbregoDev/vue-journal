<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2022, sábado</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        <i class="fa fa-trash-alt"></i>
        Borrar
      </button>

      <button class="btn btn-primary">
        <i class="fa fa-upload"></i>
        Subir foto
      </button>
    </div>
  </div>

  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Qué sucedió hoy?" />
  </div>

  <Fab icon="fa-save" />

  <img
    src="https://pixabay.com/get/ga6496c17761658b0c6e7e35b590904e66e210455d25d70685936a223df8091d1aff72595d4bc5c46b306daa21917fc7ff0bfef809429f99f0458b0026759266e_640.png"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

.img-thumbnail {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
}
</style>