import {
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
} from "@mui/material"
import { memo } from "react"
import { Controller } from "react-hook-form"
import { Props } from "./types"

const RadioButtons = memo(({ control, positions }: Props) => {
	return (
		<FormControl component='fieldset' sx={{ marginTop: "25px" }}>
			<FormLabel component='legend'>Select your position</FormLabel>
			<Controller
				rules={{ required: "Choose the position!" }}
				control={control}
				name='position'
				render={({ field }) => (
					<RadioGroup {...field}>
						<>
							{positions
								? positions.map(({ id, name }, index) => (
										<FormControlLabel
											key={id}
											value={name.toLowerCase()}
											control={<Radio />}
											label={name}
										/>
								  ))
								: null}
						</>
					</RadioGroup>
				)}
			/>
		</FormControl>
	)
})
export default RadioButtons
