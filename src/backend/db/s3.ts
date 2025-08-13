import {
  S3,
} from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "eu-north-1",
});

interface FileUpload {
  fileName: string;
  fileType: string;
  fileBuffer: ArrayBuffer;
}

export const uploadImage = async ({
  fileName, fileType, fileBuffer,
}: FileUpload) => {
  s3.putObject({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: Buffer.from(fileBuffer),
    ContentType: fileType,
  });
};

