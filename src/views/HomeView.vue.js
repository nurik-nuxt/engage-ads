import { ref, onMounted } from 'vue';
export default (await import('vue')).defineComponent({
    name: 'App',
    setup() {
        const userName = ref < string > ('');
        const getUserNameFromTelegram = () => {
            const telegramWebApp = window.Telegram.WebApp;
            if (telegramWebApp.initDataUnsafe && telegramWebApp.initDataUnsafe.user) {
                const { first_name, last_name } = telegramWebApp.initDataUnsafe.user;
                userName.value = `${first_name} ${last_name}`;
            }
        };
        onMounted(() => {
            getUserNameFromTelegram();
        });
        return {
            userName
        };
    }
});
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    (__VLS_ctx.userName);
    // @ts-ignore
    [userName,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'App';
    let __VLS_internalComponent;
}
//# sourceMappingURL=HomeView.vue.js.map