import InputLabel from './shared/InputLabel.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const emits = defineEmits(['update:markedOption']);
const updateMarkedOption = (option) => {
    emits('update:markedOption', option);
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("radioInput") }, });
    // @ts-ignore
    [InputLabel,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(InputLabel, new InputLabel({ isRequired: ((props.isRequired)), labelText: ((props.labelText)), }));
    const __VLS_1 = __VLS_0({ isRequired: ((props.isRequired)), labelText: ((props.labelText)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    for (const [option, index] of __VLS_getVForSourceType((props.options))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("radioInput__item") }, key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (...[$event]) => {
                    __VLS_ctx.updateMarkedOption(option);
                } }, name: ((props.checkName)), required: ((props.isRequired)), ...{ class: ("radioInput__item-check") }, type: ("radio"), value: ((option)), checked: ((__VLS_ctx.markedOption === option)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("radioInput__item-label") }, });
        (props.labelValues[index]);
    }
    __VLS_styleScopedClasses['radioInput'];
    __VLS_styleScopedClasses['radioInput__item'];
    __VLS_styleScopedClasses['radioInput__item-check'];
    __VLS_styleScopedClasses['radioInput__item-label'];
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
            updateMarkedOption: updateMarkedOption,
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
