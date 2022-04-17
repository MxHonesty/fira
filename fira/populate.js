import pkg from '@prisma/client'
const { PrismaClient } = pkg;

let prisma = new PrismaClient()

prisma.bug.create({
    data: {
        description: 'Just an ordinary Bug',
        reporter: {
            create: {
                name: 'verifier2',
                password: 'a',
                creator: {
                    create: {
                        name: 'admin1',
                        password: 'admin'
                    }
                }
            }
        }
    }
})
