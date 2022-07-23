import {
	Control,
} from "react-hook-form"
import { IPosition, IValues } from "../type"

export type Props = {
	control: Control<IValues, object>
	positions: IPosition[]
}