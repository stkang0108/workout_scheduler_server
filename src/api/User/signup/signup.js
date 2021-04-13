import { prisma } from '../../../../generated/prisma-client';
import * as bcrypt from 'bcryptjs';

export default {
  Mutation: {
    signup: async (_, args) => {
      const { name, email, password, trainer } = args;
      const exists = await prisma.$exists.user({ email });
      if (exists) {
        throw Error('이미 존재하는 아이디입니다.');
      }
      if (password.length <= 5) {
        throw Error('비밀번호는 6자 이상으로 설정해주세요.');
      }
      const hashedPassword = await bcrypt.hash(password, 5);
      await prisma.createUser({
        name,
        email,
        password: hashedPassword,
        trainer: '',
      });
      return true;
    },
  },
};
