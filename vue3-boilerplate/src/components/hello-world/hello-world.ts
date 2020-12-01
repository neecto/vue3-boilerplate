import { defineComponent, onMounted } from 'vue';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    setup() {
        onMounted(() => {
            console.log('home');
        });
    }
});
