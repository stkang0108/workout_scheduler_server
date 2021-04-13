import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    getLecture: async (_, args) => {
      const { name } = args;
      const user = await prisma.user({ name });
      const lecture = await prisma.lectures({ where: { postedBy: user } });
      return lecture;
    },
  },
};
