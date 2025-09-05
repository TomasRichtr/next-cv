export const getAWSUrl = (fileName: string) => {
  return `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_URL}/${fileName}`;
};
