import InputLabel from './shared/InputLabel.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const emits = defineEmits(['update:value']);
const updateValue = (event) => {
    const target = event.target;
    emits('update:value', target.value);
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
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
    __VLS_styleScopedClasses['dateInput__input'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dateInput") }, });
    // @ts-ignore
    [InputLabel,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(InputLabel, new InputLabel({ isRequired: ((props.isRequired)), id: ((props.id)), labelText: ((props.labelText)), }));
    const __VLS_1 = __VLS_0({ isRequired: ((props.isRequired)), id: ((props.id)), labelText: ((props.labelText)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dateInput__input") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.updateValue) }, type: ((props.dateType)), value: ((props.value)), required: ((props.isRequired)), id: ((props.id ?? '')), min: ((props.minDate ?? undefined)), max: ((props.maxDate ?? undefined)), });
    if (props.isErro) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("dateInput__input-error") }, });
        (props.errorMessage);
    }
    __VLS_styleScopedClasses['dateInput'];
    __VLS_styleScopedClasses['dateInput__input'];
    __VLS_styleScopedClasses['dateInput__input-error'];
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
            InputLabel: InputLabel,
            updateValue: updateValue,
        };
    },
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
});
;
