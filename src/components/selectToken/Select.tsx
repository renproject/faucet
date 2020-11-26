import BigNumber from "bignumber.js";
import React from "react";
import { OptionProps } from "react-select/src/components/Option";
import { SingleValueProps } from "react-select/src/components/SingleValue";

export interface OptionType {
    label: string;
    value: string;
    balance: BigNumber;
    image: React.FC;
    disabled?: boolean;
}

export const CustomValue = <X extends OptionType>(
    props: SingleValueProps<X>,
) => {
    const {
        className,
        cx,
        isDisabled,
        innerProps,
        children: propChildren,
    } = props;

    const option = props.data;
    const children = (
        <>
            {React.createElement(option.image)}
            {propChildren}
        </>
    );

    return (
        <div
            // tslint:disable-next-line: no-any
            className={(cx as any)(
                {
                    "single-value": true,
                    "single-value--is-disabled": isDisabled,
                },
                className + " Select--currency__value",
            )}
            {...innerProps}
        >
            {children}
        </div>
    );
};

export const CustomOption = <X extends OptionType>(props: OptionProps<X>) => {
    const {
        children,
        className,
        cx,
        isDisabled,
        isFocused,
        isSelected,
        innerRef,
        innerProps,
    } = props;

    const option = props.data as X;

    return (
        <div
            ref={innerRef}
            className={[
                // tslint:disable-next-line: no-any
                (cx as any)(
                    {
                        option: true,
                        "option--is-disabled": isDisabled || option.disabled,
                        "option--is-focused": isFocused,
                        "option--is-selected": isSelected,
                    },
                    className,
                ),
                isSelected ? "Select--currency__option--selected" : "",
            ].join(" ")}
            style={
                option.disabled ? { opacity: 0.5, cursor: "not-allowed" } : {}
            }
            {...innerProps}
        >
            {React.createElement(option.image)}
            {children}
            <span className="option-balance">
                ({option.balance.decimalPlaces(5).toString()} {option.value})
            </span>
        </div>
    );
};
