import { Request, Response } from "express";
import User from "../model/user";
import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";
import jwt from "jsonwebtoken";

export const Register = async (req: any, res: any) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
      return;
    }

    // role validation
    if (!["user", "owner"].includes(role)) {
      res.status(400).json({
        success: false,
        message: "Invalid role",
      });
      return;
    }

    // existing user
    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      res.status(409).json({
        success: false,
        message: "Email already registered",
      });
      return;
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const Login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    // Validation

    if (!email) {
      res.status(400).json({
        success: false,
        message: "Email is required",
      });

      return;
    }

    if (!password) {
      res.status(400).json({
        success: false,
        message: "Password is required",
      });

      return;
    }

    // Find User

    const user = await User.findOne({
      email,
    });

    if (!user) {
      res.status(401).json({
        success: false,
        message: "Please enter a valid email",
      });

      return;
    }

    // Compare Password

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });

      return;
    }

    // Generate Tokens

    const accessToken = generateAccessToken(user._id.toString(), user.role);
    const refreshToken = generateRefreshToken(user._id.toString());

    // Save Refresh Token

    user.refreshToken = refreshToken;

    await user.save();

    // Cookie

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Response

    res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getMe = async (req: any, res: any) => {
  try {
    const user = await User.findById(req.user?.userId).select(
      "-password -refreshToken",
    );

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });

      return;
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) {
      res.status(401).json({
        success: false,
        message: "Refresh token missing",
      });

      return;
    }

    const decoded = jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET as string,
    ) as {
      userId: string;
    };

    const user = await User.findById(decoded.userId);

    if (!user || user.refreshToken !== token) {
      res.status(401).json({
        success: false,
        message: "Invalid refresh token",
      });

      return;
    }

    const accessToken = generateAccessToken(user._id.toString(), user.role);

    res.status(200).json({
      success: true,
      accessToken,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Refresh token expired",
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.refreshToken;

    if (token) {
      const user = await User.findOne({
        refreshToken: token,
      });

      if (user) {
        user.refreshToken = "";

        await user.save();
      }
    }

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
