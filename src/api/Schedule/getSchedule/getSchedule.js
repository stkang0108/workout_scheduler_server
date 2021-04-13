import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    getSchedule: async (_, args) => {
      const { name } = args;
      const user = await prisma.user({ name });
      const schedule = await prisma.schedules({ where: { postedBy: user } });
      return schedule;
    },
  },
};
