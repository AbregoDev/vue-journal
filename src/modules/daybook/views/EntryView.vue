<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>

            <div>
                <button v-if="entry.id"
                    class="btn btn-danger mx-2"
                    @click="onDeleteEntry">
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
            <textarea v-model="entry.text" placeholder="Qué sucedió hoy?" />
        </div>
    </template>

    <Fab icon="fa-save"
        @on:click="saveEntry"/>

    <img
        src="https://watermark.lovepik.com/photo/50107/5987.jpg_wh1200.jpg"
        alt="entry-picture"
        class="img-thumbnail"
    />
</template>

<script>
import { defineAsyncComponent } from "vue";

import { mapGetters, mapActions } from "vuex";

import getDayMonthYear from "../helpers/getDayMonthYear";

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    components: {
        Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
    },
    data() {
        return {
            entry: null,
        };
    },
    methods: {
        loadEntry() {
            let entry

            if (this.id === 'new') {
                entry = {
                    text: '',
                    date: new Date().toDateString()
                }
            } else {
                entry = this.getEntryById(this.id);
                if (!entry) {
                    this.$router.push({ name: "no-entry" });
                }
            }

            this.entry = entry;
        },
        async saveEntry() {
            if (this.entry.id) {
                // Actualizar entrada
                await this.updateEntry(this.entry)
            } else {
                // Crear entrada
                const { id } = await this.createEntry(this.entry)
                //Redirigir
                this.$router.push({ name: 'entry', params: { id }})
            }
        },
        async onDeleteEntry() {
            // Borrar entrada
            await this.deleteEntry(this.entry.id)
            // Redireccionar al usuario
            this.$router.push({ name: 'no-entry' })
        },
        ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry'])
    },
    computed: {
        day() {
            const { day } = getDayMonthYear(this.entry.date);
            return day;
        },
        month() {
            const { month } = getDayMonthYear(this.entry.date);
            return month;
        },
        yearDay() {
            const { yearDay } = getDayMonthYear(this.entry.date);
            return yearDay;
        },
        ...mapGetters("journal", ["getEntryById"]),
    },
    created() {
        // console.log(this.id)
        this.loadEntry();
    },
    watch: {
        id() {
            this.loadEntry();
        },
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