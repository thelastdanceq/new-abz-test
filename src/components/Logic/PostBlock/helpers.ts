export const sizeChecker =  (value: FileList | null) =>
 ( (!!value && value[0].size <= 5_000_000) || 
                        "Too big File")


export const fileTypeChecker = (value: FileList | null) =>  (
    (!!value && value[0].type === "image/jpeg") ||
    (!!value && value[0].type === "image/jpeg") ||
    "Please choose jpeg/jpg images"
)

export const  fileSquareChecker =  (value:FileList | null) => {
if (value) {
    const reader = new FileReader()

    reader.readAsDataURL(value[0])
    reader.onload = (e) => {
        const image = new Image()
        image!.src! =
            !!e!.target!.result &&
            !(e!.target!.result instanceof ArrayBuffer)
            ? e!.target!.result
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

