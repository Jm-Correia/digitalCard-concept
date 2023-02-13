<script lang="ts">
import { PropType, ref } from 'vue'
import background from '../assets/background.jpg';
import QRCodeVue3 from "qrcode-vue3";

interface Card {
    hcn: String;
    name: String;
    birth: Date;
    gender: String;
    donor: String;
    effective: Date;
    expiry: Date;
}

export default {
    name: 'DigitalCard',
    props: {
        logo: {
            type: String,
            required: true
        },
        info: {
            type: Object as PropType<Card>,
            required: true
        }
    },
    components: {
        QRCodeVue3
    },
    setup() {
        const isFront = ref<Boolean>(true)
        const changeFace = () => {


            isFront.value = !isFront.value;
        }


        return {
            isFront,
            changeFace,
            background,
            QRCodeVue3
        }
    }
}
</script>

<template>

    <div class="digital-card-regular" @click="changeFace">
        <Transition name="spin">
            <div class="digital-card-inner-background" v-if="isFront">
                <div class="digital-card-logo">
                    <slot name="logo">
                        <img :src="logo" alt="LOGO" class="digital-card-logo-regular">
                    </slot>
                </div>
            </div>
            <div class="digital-card-inner-background" v-else>

                <div class="digital-qrcode">

                    <QRCodeVue3 :width="150" :height="150" value="name:joao;status:donor1;birth:1900JAN21;"
                        :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                        :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 30 }" :dotsOptions="{
                            type: 'square',
                            color: '#26249a',
                            gradient: {
                                type: 'linear',
                                rotation: 0,
                                colorStops: [
                                    { offset: 0, color: '#000' },
                                    { offset: 1, color: '#000' },
                                ],
                            },
                        }" :backgroundOptions="{ color: '#ffffff' }"
                        :cornersSquareOptions="{ type: 'square', color: '#000000' }"
                        :cornersDotOptions="{ type: undefined, color: '#000000' }" myclass="my-qur" imgclass="img-qr" />
                </div>
            </div>


            <!-- <div class="front" v-if="isFront">
                <img :src="background" alt="">
                <div class="digital-card-logo">
                    <slot name="logo">
                        <img :src="logo" alt="LOGO" class="digital-card-logo-regular">
                    </slot>
                </div>
                <div>
                    <slot name="front">
                        <p>Front</p>
                    </slot>
                </div>
            </div>
            <div class="back" v-else>
                <img :src="background" alt="">
                <div class=" ">
                    <div>
                        <slot name="back">
                            <p>Back</p>
                        </slot>
                    </div>
                </div>
            </div> -->

        </Transition>
    </div>

</template>













<style scoped src="./css/skin-digital-card.css"/>


<style scoped>
.spin-enter-from {
    opacity: 0;
    transform: rotateY(-180deg);
}

.spin-enter-to {
    opacity: 1;
}

.spin-enter-active {
    transition: transform 1.2s ease-in-out;
    transform-style: preserve-3d;
}

.spin-leave-from {
    opacity: 1;
}

.spin-leave-to {
    opacity: 0;
}

.spin-leave-active {
    transform-style: preserve-3d;
}
</style>