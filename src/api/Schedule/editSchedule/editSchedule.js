import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    editSchedule: async (_, args) => {
      const { id, todo } = args;

      await prisma.updateSchedule({
        where: { id },
        data: { todo },
      });
      return true;
    },
  },
};
