export const mongooseSchemaConfig = {
  id: false,
  versionKey: false,
  timestamps: true,
  autoIndex: true,
  toJSON: {
    virtuals: true,
    transform: (_, ret) => {
      delete ret._id;
      delete ret.updatedAt;
      delete ret.createdAt;
      return ret;
    },
  },
  toObject: {
    virtuals: true,
    transform: (_, ret) => {
      delete ret._id;
      delete ret.updatedAt;
      delete ret.createdAt;
      return ret;
    },
  },
};
