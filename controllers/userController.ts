import { response } from "express";

export const createUser = (req: Request, res: response) => {
    try {

    } catch (error) {
        console.log("Faild to create user", error);
        return res.status(500).json({
            message: "Failed to create a user"
        })
    }
}