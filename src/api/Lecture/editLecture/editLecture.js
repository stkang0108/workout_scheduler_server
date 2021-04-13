import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    editLecture: async (_, args) => {
      const { id, time } = args;

      await prisma.updateLecture({
        where: { id },
        data: { time },
      });
      return true;
    },
  },
};
