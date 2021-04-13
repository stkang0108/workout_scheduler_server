import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    deleteSchedule: async (_, args) => {
      const { id } = args;
      await prisma.deleteSchedule({ id });
      return true;
    },
  },
};
