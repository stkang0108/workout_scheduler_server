import { prisma } from '../../../../generated/prisma-client';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export default {
  Mutation: {
    signin: async (_, args) => {
      const { email, password } = args;
      const user = await prisma.user({ email });
      if (!user) {
        throw Error('존재하지 않는 아이디입니다, 다시 한번 확인해 주세요.');
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error('비밀번호가 틀렸습니다, 다시 한번 확인해 주세요.');
      }
      const token = jwt.sign({ id: user.id }, process.env.SECRET);
      return { token, user };
    },
  },
};
