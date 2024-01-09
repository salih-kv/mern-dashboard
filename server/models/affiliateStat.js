import mongoose from "mongoose";

const affiliateStatSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

export const AffiliateStat = mongoose.model(
  "AffiliateStat",
  affiliateStatSchema
);
