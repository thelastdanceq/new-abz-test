import { IPosition } from "./type"

export const sizeChecker = (value: FileList | null) =>
((value && value[0].size <= 5_000_000) ||
    "Too big File")


export const fileTypeChecker = (value: FileList | null) => (
    (!!value && value[0].type === "image/jpeg") ||
    (!!value && value[0].type === "image/jpeg") ||
    "Please choose jpeg/jpg images"
)


export const fileSquareChecker = (setter: React.Dispatch<React.SetStateAction<string>>) => (value: FileList | null) => {
    setter('asd')
    if (value) {
        const reader = new FileReader()

        reader.readAsDataURL(value[0])
        reader.onload = (e: any) => {
            const image = new Image()
            image.src =
                !!e.target.result &&
                    !(e.target.result instanceof ArrayBuffer)
                    ? e.target.result
                    : ""
            image.onload = (e: any) => {
                const height = e.path[0].height
                const width = e.path[0].width
                if (height < 70 || width < 70) {
                    return "Size is too small "
                }
                return true
            }
        }
    } else {
        return "Something gone wrong..."
    }
}



export const getToken = async () => {
    const response = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    )
    const { token } = await response.json()
    return token
}

export const postFormData = async (formData: FormData, token: string) => {
    const postResponse = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        {
            method: "POST",
            body: formData,
            headers: { Token: token },
        }
    )
    return await postResponse.json()
}

export const getFormDate = (pos: number, name: string, email: string, phone: string, photo: FileList) => {
    const formData = new FormData()
    formData.append("position_id", String(pos))
    formData.append("name", name)
    formData.append("email", email)
    formData.append("phone", phone)
    formData.append("photo", photo[0])

    return formData
}

export const getId = (positions: IPosition[], position: string) => {

    const pos = positions.filter(
        ({ name, id }) => name.toLowerCase() === position
    )[0].id

    return pos
}

const makeNewUsersFetcher = (page: number, count: number) => async () => {
    const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`
    )
    const data = await response.json()
    return data
}

export const firstPageUsers = makeNewUsersFetcher(1, 6)