"use server"

export async function addEmailNewsletter(  prevState: { success: null | boolean ; message: string }, formData: FormData){
    console.log(formData?.get("email"), prevState)

    return {success: false, message: "An error occurred"}
}