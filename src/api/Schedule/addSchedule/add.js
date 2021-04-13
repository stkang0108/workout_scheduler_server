import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    addSchedule: async (_, args) => {
      const { name, date, todo } = args;
      await prisma.createSchedule({
        date,
        todo,
        postedBy: { connect: { name } },
      });
      return true;
    },
  },
};
