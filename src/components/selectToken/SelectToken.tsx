import { OrderedMap } from "immutable";
import React from "react";
import Select from "react-select";

import { CustomOption, CustomValue, OptionType } from "./Select";
import "./styles.scss";

/**
 * SelectToken allows the user to select a market from two token dropdowns
 */
export class SelectToken<Token extends string> extends React.Component<
    Props<Token>,
    State
> {
    /**
     * The main render function.
     * @dev Should have minimal computation, loops and anonymous functions.
     */
    public render(): React.ReactNode {
        // Retrieve the order inputs from the store.
        const { token, allTokens, disabled } = this.props;
        const customStyles = {
            // tslint:disable-next-line: no-any
            option: (provided: any, state: any) => ({
                ...provided,
                backgroundColor: state.isSelected
                    ? "rgba(0, 27, 58, 0.1)"
                    : "transparent",
                "&:hover": {
                    backgroundColor: "rgba(219, 224, 232, 0.3)",
                },
            }),
        };

        const tokens = allTokens.valueSeq().toArray();

        return (
            <Select
                className="Select--currency"
                classNamePrefix="Select--currency"
                name="quoteCode"
                value={tokens.find((option) => option.value === token) || null}
                onChange={this.handleChange}
                options={tokens}
                components={{
                    SingleValue: CustomValue,
                    Option: CustomOption,
                }}
                isClearable={false}
                backspaceRemovesValue={false}
                styles={customStyles}
                placeholder={""}
                isDisabled={disabled}
            />
        );
    }

    // tslint:disable-next-line:no-any
    private readonly handleChange = (event: any): void => {
        const newToken = event.value;
        this.props.onChange(newToken);
    };
}

interface Props<Token> {
    token: Token | undefined | null;
    allTokens: OrderedMap<Token, OptionType>;
    disabled?: boolean;
    onChange(token: Token | undefined | null): void;
}

interface State {}
