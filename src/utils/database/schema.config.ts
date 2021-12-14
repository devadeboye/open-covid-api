export const mongooseSchemaConfig = {
  id: true,
  versionKey: false,
  timestamps: true,
  autoIndex: true,
  toJSON: {
    virtuals: true,
    transform: (_, ret) => {
      delete ret._id;
      delete ret.updatedAt;
      return ret;
    },
  },
  toObject: {
    virtuals: true,
    transform: (_, ret) => {
      delete ret._id;
      delete ret.updatedAt;
      return ret;
    },
  },
};
