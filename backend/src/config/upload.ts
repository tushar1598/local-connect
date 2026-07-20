import multer from "multer";

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: {
    fileSize: 20 * 1024 * 1024, // 🔥 20MB (video ke liye increase)
  },
  fileFilter: (req, file, cb) => {
    const allowed = [
      // 🖼️ Images
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/webp",

      // 🎥 Videos
      "video/mp4",
      "video/mpeg",
      "video/quicktime", // .mov

      // 📄 Documents
      "application/pdf",
      "application/msword", // .doc
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
      "application/vnd.ms-excel", // .xls
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx

      // 📦 Others
      "application/zip",
    ];

    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("File type not supported"));
    }
  },
});

export type UploadFile = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
};

export interface MulterRequest extends Request {
  files?: Express.Multer.File[];
}
