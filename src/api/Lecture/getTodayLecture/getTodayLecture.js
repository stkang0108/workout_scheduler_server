import { prisma } from '../../../../generated/prisma-client';

const fragment =`
 fragment LectureFields on User{
         id
         date
         time
         postedBy{
             name
         }
 }
`

export default {
    Query: {
        getTodayLecture : async (_,args) => {
            const {name} = args
            const members = await prisma.users({ where: { trainer: name } });
            const lectures = await prisma.lectures({ where: { postedBy: members.name } }).$fragment(fragment);
            return lectures
        }
    }
}