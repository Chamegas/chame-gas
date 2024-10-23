import Product from '@/views/index/components/Product.vue';
import ProductForm from '@/views/index/components/ProductForm.vue';
import { ProductsMainIndex, ProductsForm } from '@/data/products';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let productForm = {};
const canShowForm = ref(false);
const handleProductSelect = (id) => {
    productForm = ProductsForm[id];
    canShowForm.value = true;
};
const handleCloseForm = () => {
    canShowForm.value = false;
};
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
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['product-container'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("index") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("index-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-container") }, });
    for (const [product, index] of __VLS_getVForSourceType((__VLS_ctx.ProductsMainIndex))) {
        // @ts-ignore
        [Product,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(Product, new Product({ key: ((index)), ...(product), onProductSelect: ((() => __VLS_ctx.handleProductSelect(index))), }));
        const __VLS_1 = __VLS_0({ key: ((index)), ...(product), onProductSelect: ((() => __VLS_ctx.handleProductSelect(index))), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    if (__VLS_ctx.canShowForm) {
        // @ts-ignore
        [ProductForm,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(ProductForm, new ProductForm({ ...(__VLS_ctx.productForm), onClose: ((__VLS_ctx.handleCloseForm)), }));
        const __VLS_6 = __VLS_5({ ...(__VLS_ctx.productForm), onClose: ((__VLS_ctx.handleCloseForm)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    }
    __VLS_styleScopedClasses['index'];
    __VLS_styleScopedClasses['index-content'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['product-container'];
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
            Product: Product,
            ProductForm: ProductForm,
            ProductsMainIndex: ProductsMainIndex,
            productForm: productForm,
            canShowForm: canShowForm,
            handleProductSelect: handleProductSelect,
            handleCloseForm: handleCloseForm,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
