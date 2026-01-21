import { response } from "express";

export const createUser = (req: Request, res: response) => {
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({
                message: "Fields are required",
                success: false
            })
        }
    } catch (error) {
        console.log("Faild to create user", error);
        return res.status(500).json({
            message: "Failed to create a user"
        })
    }
}