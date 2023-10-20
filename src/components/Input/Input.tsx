import { InputStyled } from "./inputStyled"

const Input = ({ placeholder, reference }: { placeholder: string, reference: any }) => {
    return (
        <InputStyled ref={reference} type="text" placeholder={placeholder} />)
}

export default Input