import { ref, onMounted } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), { filled: false });
const icons = Object.fromEntries(Object.entries(import.meta.glob('/src/assets/icons/*.svg', { as: 'raw' })).map(([key, value]) => {
    const filename = key.split('/').pop()?.split('.').shift();
    return [filename, value];
}));
const icon = ref(null);
onMounted(async () => {
    if (props.name && icons[props.name]) {
        icon.value = await icons[props.name]();
    }
});
const __VLS_withDefaultsArg = (function (t) { return t; })({ filled: false });
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon") }, });
    if (__VLS_ctx.icon) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("icon") }, });
        __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.icon));
        // @ts-ignore
        [icon, icon, vHtml,];
    }
    else {
        // @ts-ignore
        const __VLS_0 = {}
            .VanSkeleton;
        ({}.VanSkeleton);
        __VLS_components.VanSkeleton;
        __VLS_components.vanSkeleton;
        // @ts-ignore
        [VanSkeleton,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ style: ({}) }, ...{ class: ("icon icon-loading !p-0 !m-0") }, avatar: (true), title: (true), size: ("16"), }));
        const __VLS_2 = __VLS_1({ ...{ style: ({}) }, ...{ class: ("icon icon-loading !p-0 !m-0") }, avatar: (true), title: (true), size: ("16"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ style: ({}) }, ...{ class: ("icon icon-loading !p-0 !m-0") }, avatar: (true), title: (true), size: ("16"), }));
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['icon-loading'];
        __VLS_styleScopedClasses['!p-0'];
        __VLS_styleScopedClasses['!m-0'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                icon: icon,
            };
        },
        props: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
;
//# sourceMappingURL=BaseIcon.vue.js.map