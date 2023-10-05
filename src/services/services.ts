export const encode = async (object: any, format: any): Promise<any> => {
  const buffer = new Buffer(JSON.stringify(object));
  return {
    encoded: buffer.toString('hex')
  };
};

export const decode = async (buffer: string, format: any): Promise<any> => {
  const decoded = Buffer.from(buffer, 'hex');
  return {
    // decoded: decoded
    decoded: JSON.parse(decoded.toString())
  };
};
