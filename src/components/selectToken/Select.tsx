import * as React from "react";

import { css } from "emotion";
import { OptionProps } from "react-select/src/components/Option";
import { SingleValueProps } from "react-select/src/components/SingleValue";
import BigNumber from "bignumber.js";

export interface OptionType { label: string; value: string; balance: BigNumber; image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; }

const extendClassName = (className: string | undefined | void, extra: string) => !className ? extra : `${className} ${extra}`;

export const CustomValue = <X extends OptionType>(props: SingleValueProps<X>) => {
    const { className, cx, getStyles, isDisabled, innerProps, children: propChilren } = props;

    const option = props.data;
    const children = <>
        {React.createElement(option.image)}
        {propChilren}
    </>;

    return (
        <div
            className={extendClassName(cx(
                // tslint:disable-next-line: no-any
                css(getStyles("singleValue", props)),
                {
                    "single-value": true,
                    "single-value--is-disabled": isDisabled
                },
                className),
                "Select--currency__value",
            )}
            {...innerProps}
        >
            {children}
        </div>
    );
};

export const CustomOption = <X extends OptionType>(props: OptionProps<X>) => {
    const { children, className, cx, getStyles, isDisabled, isFocused, isSelected, innerRef, innerProps } = props;

    const option = props.data as X;

    return (
        <div
            ref={innerRef}
            className={
                extendClassName(
                    extendClassName(
                        cx(
                            css(getStyles("option", props)),
                            {
                                option: true,
                                "option--is-disabled": isDisabled,
                                "option--is-focused": isFocused,
                                "option--is-selected": isSelected,
                            },
                            className,
                        ),
                        "Select--currency__option"),
                    isSelected ? "Select--currency__option--selected" : ""
                )}
            {...innerProps}
        >
            {React.createElement(option.image)}
            {children}
            <span className="option-balance">({option.balance.decimalPlaces(5).toString()} {option.value})</span>
        </div >
    );
};
