import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log: ['query', 'error', 'warn', 'info'] })

const users = [
    {
        email: 'adriano@email.com',
        fullName: 'Adriano Rama',
        password: 'adriano123',
        amountInAccount: 500
    },
    {
        email: 'alban@email.com',
        fullName: 'Alban Rama',
        password: 'alban123',
        amountInAccount: 1000
    }
]

const transactions = [
    {
        userId: 1,
        amount: 500,
        currency: 'USD',
        receiverOrSender: 'sender',
        completedAt: '3/15/2022',
        isPositive: true
    },
    {
        userId: 2,
        amount: 500,
        currency: 'USD',
        receiverOrSender: 'receiver',
        completedAt: '3/15/2022',
        isPositive: true
    }
]

async function createStuff() {
    for (const user of users) {
        await prisma.user.create({ data: user })
    }

    for (const transaction of transactions) {
        await prisma.transaction.create({ data: transaction })
    }
}

createStuff()