import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    deleteLecture: async (_, args) => {
      const { id } = args;
      await prisma.deleteLecture({ id });
      return true;
    },
  },
};
