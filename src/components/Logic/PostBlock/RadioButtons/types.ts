import {
	Control,
	DeepRequired,
	FieldErrorsImpl,
} from "react-hook-form"
import { IPosition, IValues } from "../type"

export type Props = {
	errors: FieldErrorsImpl<DeepRequired<IValues>>
	control: Control<IValues, object>
	positions: IPosition[]
}