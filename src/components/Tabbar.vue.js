import { computed } from "vue";
import BaseIcon from "@/components/base/BaseIcon.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tabs = computed(() => {
    return [
        {
            title: 'Tasks',
            icon: 'tasks'
        },
        {
            title: 'Аirdrop',
            icon: 'airdrop'
        },
        {
            title: 'Аcademy',
            icon: 'academy'
        },
        {
            title: 'Farm',
            icon: 'farm'
        },
        {
            title: 'Influencers',
            icon: 'influencers'
        },
        {
            title: 'Freelance',
            icon: 'freelance'
        }
    ];
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
    // @ts-ignore
    const __VLS_0 = {}
        .VanTabbar;
    ({}.VanTabbar);
    ({}.VanTabbar);
    __VLS_components.VanTabbar;
    __VLS_components.vanTabbar;
    __VLS_components.VanTabbar;
    __VLS_components.vanTabbar;
    // @ts-ignore
    [VanTabbar, VanTabbar,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ id: ("tab-bar"), ...{ class: ("") }, route: (true), }));
    const __VLS_2 = __VLS_1({ id: ("tab-bar"), ...{ class: ("") }, route: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ id: ("tab-bar"), ...{ class: ("") }, route: (true), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    for (const [tab, index] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
        // @ts-ignore
        const __VLS_6 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((index)), title: ((tab.title)), to: ((`/${tab.icon}`)), }));
        const __VLS_8 = __VLS_7({ key: ((index)), title: ((tab.title)), to: ((`/${tab.icon}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ key: ((index)), title: ((tab.title)), to: ((`/${tab.icon}`)), }));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        // @ts-ignore
        [BaseIcon,];
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ name: ((tab.icon)), }));
        const __VLS_13 = __VLS_12({ name: ((tab.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        ({}({ name: ((tab.icon)), }));
        const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_13));
        // @ts-ignore
        [tabs,];
        __VLS_nonNullable(__VLS_11.slots).default;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                BaseIcon: BaseIcon,
                tabs: tabs,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=Tabbar.vue.js.map