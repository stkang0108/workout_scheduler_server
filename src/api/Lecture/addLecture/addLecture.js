import { prisma } from '../../../../generated/prisma-client';

export default {
    Mutation:{
        addLecture: async(_,args) => {
            const {name, date, time} = args
            await prisma.createLecture({
                date,time, postedBy: { connect: { name } },
            })
            return true
        }
    }
}