import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    addTrainer: async (_, args) => {
      const { email, trainer } = args;
      const user = await prisma.user({ name: trainer });
      if (!user) {
        throw Error('등록되어 있지 않은 사용자입니다.');
      }
      if (user.trainer !== 'trainer') {
        throw Error('등록되어 있지 않은 트레이너입니다.');
      }
      await prisma.updateUser({
        where: { email: email },
        data: { trainer },
      });
      return true;
    },
  },
};
