import { Box, TextField, Button, Tooltip, Modal } from "@mui/material"
import { memo, useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { limitString30 } from "../UserLayout/UserCard/helpers"
import { defaultValues } from "./const"
import {
	fileSquareChecker,
	fileTypeChecker,
	firstPageUsers,
	getFormDate,
	getId,
	getToken,
	postFormData,
	sizeChecker,
} from "./helpers"
import RadioButtons from "./RadioButtons/RadioButtons"
import { IPosition, IValues } from "./type"
//@ts-ignore
import success from "../../../assets/images/success-image.svg"
import { UsersDispatchContext } from "../../../contexts/users"

export const PostBlock = memo(() => {
	const { setUsers } = useContext(UsersDispatchContext)
	const [, setValue] = useState("")

	const [open, setOpen] = useState(false)
	const [positions, setPositions] = useState<IPosition[] | null>(null)
	const {
		register,
		reset,
		watch,
		handleSubmit,
		control,
		formState: { errors, isValid },
	} = useForm({ defaultValues, mode: "onChange", reValidateMode: "onChange" })
	const watchFields = watch("photo")

	const handleClose = () => {
		setOpen(false)
	}

	const onSubmit = async (data: IValues) => {
		const { email, name, phone, photo, position } = data

		if (positions && photo) {
			const pos = getId(positions, position)
			const formData = getFormDate(pos, name, email, phone, photo)

			const token = await getToken()
			const data = await postFormData(formData, token)

			if (data.success) {
				setOpen(true)
				reset()
				const { users } = await firstPageUsers()
				setUsers(users)
			} else {
				alert(data.message)
			}
		}
	}
	useEffect(() => {
		fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
			.then((response) => response.json())
			.then(({ positions }) => {
				setPositions(positions)
			})
	}, [])

	return (
		<Box
			id='form'
			sx={{
				marginTop: "140px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box sx={{ textAlign: "center" }}>
				<h1> Working with POST request</h1>
			</Box>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box sx={{ maxWidth: "380px" }}>
					<Box>
						<TextField
							sx={{ marginTop: "50px" }}
							type={"text"}
							fullWidth
							{...register("name", {
								required: "required",
								maxLength: { value: 60, message: "length must be < 60" },
								minLength: { value: 2, message: "length must be >2  " },
							})}
							label={"Name"}
							error={!!errors.name}
							helperText={errors.name ? errors.name.message : ""}
						/>

						<TextField
							sx={{ marginTop: "50px" }}
							{...register("email", {
								required: "required",
								pattern: {
									value:
										/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
									message: "email is not valid",
								},
							})}
							type={"email"}
							fullWidth
							error={!!errors.email}
							helperText={errors.email ? errors.email.message : ""}
							label='Email'
						/>

						<TextField
							sx={{ marginTop: "50px" }}
							{...register("phone", {
								required: "required",
								pattern: {
									value: /\+380([0-9]{9})/,
									message: "+38 (XXX) XXX - XX - XX",
								},
								maxLength: { value: 13, message: "+38 (XXX) XXX - XX - XX" },
							})}
							type={"text"}
							fullWidth
							error={!!errors.phone}
							helperText={errors.phone ? errors.phone.message : ""}
							label='Phone'
						/>
					</Box>
					{positions && (
						<RadioButtons control={control} positions={positions} />
					)}

					<Box
						sx={{
							border: errors.photo ? "1px solid red" : "1px solid #D0CFCF",
							borderRadius: "4px",
							display: "flex",
							marginTop: "50px",
						}}
					>
						<label htmlFor='faceImage'>
							<Button
								color='primary'
								aria-label='upload picture'
								component='span'
								variant='outlined'
								sx={{
									padding: "15px",
									border: errors.photo ? "1px solid red" : "1px solid #D0CFCF",
									borderTop: "none",
									borderLeft: "none",
									borderBottom: "none",
									borderTopRightRadius: "0",
									borderBottomRightRadius: "0",
									":hover": {
										borderRight: "2px solid black",
									},
								}}
							>
								Upload
							</Button>
						</label>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								padding: "16px",
								flexGrow: 1,
								color: "gray",
							}}
						>
							<span>
								{watchFields ? (
									<Tooltip title={watchFields![0]!.name!}>
										<span>{limitString30(watchFields![0]!.name!)}</span>
									</Tooltip>
								) : (
									`Upload your photo`
								)}
							</span>
						</Box>

						<input
							style={{ display: "none" }}
							accept='image/jpeg'
							id='faceImage'
							type='file'
							{...register("photo", {
								required: "Required",
								validate: {
									sizeChecker: sizeChecker,
									fileTypeChecker: fileTypeChecker,
									fileSquareChecker: fileSquareChecker(setValue),
								},
							})}
						/>
					</Box>
					<label style={{ color: "red" }}>
						{errors.photo?.message ? errors.photo?.message : ""}
					</label>
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Button
							variant='contained'
							type='submit'
							disabled={!isValid}
							sx={{ marginTop: "50px", marginBottom: "100px" }}
						>
							Sign up
						</Button>
					</Box>
				</Box>
			</form>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
			>
				<img src={success} alt='success' />
			</Modal>
		</Box>
	)
})
PostBlock.displayName = "PostBlock"
