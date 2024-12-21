import superUserModel from "../models/SuperUser.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

dotenv.config();

class SuperUserController {
  static createSuperUser = async (req, res) => {

    const superEmail = String(process.env.SUPER_EMAIL);
    const superPassword = String(process.env.SUPER_PASSWORD);
    try {
      const hashedPassword = await bcrypt.hash(superPassword, 10);

      const superUser = new superUserModel({
        email: superEmail,
        password: hashedPassword
      });

      const savedUser = await superUser.save();
      return res.status(201).json(savedUser);
    } catch(error) {
      return res.status(500).json({ msg: "Error creating super user", error: error.message });
    }
  }

  static loginSuperUser = async (req, res) => {
    const { email, password } = req.body;
    const secret = process.env.SECRET;
    let login = false;
    try {
      const superUser = await superUserModel.findOne({ email });
      if (!superUser) {
        return res.status(404).json({ msg: "Super user not found" });
      }

        if (!superUser.password) {
        return res.status(500).json({ msg: "Super user password not set" });
      }

      const auth = await bcrypt.compare(password, superUser.password);
      if (!auth) {
        return res.status(401).json({ msg: "Invalid password" });
      } else {
        login = true;
        const token = jsonwebtoken.sign({
          email:email
        }, secret)
        return res.status(200).json({ msg: "Login successful", login, token });
      }
    } catch (error) {
      return res.status(500).json({ msg: "Error logging in", error: error.message });
    }
  }
}

export default SuperUserController;