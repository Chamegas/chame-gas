import logo from '@/assets/imgs/logo/logoNoBg.png';
import router from '@/router';
import { computed } from 'vue';
import { CartService } from '@/services/cartService';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const goToCart = () => {
    router.push({ name: 'cartIndex' });
};
const cartService = CartService.getInstance();
const cartQuantity = computed(() => cartService.getCartQuantity());
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['header__logo'];
    __VLS_styleScopedClasses['header__logo'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['header__logo'];
    __VLS_styleScopedClasses['header__logo'];
    __VLS_styleScopedClasses['header__sale'];
    __VLS_styleScopedClasses['header__sale-cart'];
    __VLS_styleScopedClasses['header__sale-info'];
    __VLS_styleScopedClasses['header__sale-qtd'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header__logo") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: (({ name: 'index' })), }));
    const __VLS_2 = __VLS_1({ to: (({ name: 'index' })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.logo)), alt: ("logo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header__sale") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.goToCart) }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("material-symbols-outlined header__sale-cart") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header__sale-info") }, });
    if (__VLS_ctx.cartQuantity) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header__sale-qtd") }, });
        (__VLS_ctx.cartQuantity);
    }
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['header__logo'];
    __VLS_styleScopedClasses['header__sale'];
    __VLS_styleScopedClasses['material-symbols-outlined'];
    __VLS_styleScopedClasses['header__sale-cart'];
    __VLS_styleScopedClasses['header__sale-info'];
    __VLS_styleScopedClasses['header__sale-qtd'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            logo: logo,
            goToCart: goToCart,
            cartQuantity: cartQuantity,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
