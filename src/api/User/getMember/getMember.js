import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    getMember: async (_, args) => {
      const { name } = args;
      const members = await prisma.users({ where: { trainer: name } });
      return members;
    },
  },
};
