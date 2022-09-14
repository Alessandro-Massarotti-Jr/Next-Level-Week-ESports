import express from "express";
import cors from "cors"
import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinutes } from "./utils/convert-hours-string-to-minutes";
import { convertMinutesToHourString } from "./utils/convert-minutes-to-hour-string";


const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    });
    return response.json(games)
})

app.post('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;
    const body = request.body;

    const ad = await prisma.ad.create({
        data: {
            gameId: gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            hourStart: convertHourStringToMinutes(body.hourStart),
            useVoiceChannel: body.useVoiceChannel,
            weekDays: body.weekDays.join(',')
        }
    });

    return response.json(ad)
})

app.get('/games/:id/ads', async (request, response) => {
     
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true
        },
        where: {
            gameId: gameId
        },
        orderBy: {
            createdAt: 'desc',
        }
    });
    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd)
        }
    }))
})

app.get('/ads/:id/discord', async (request, response) => {

    const adId = request.params.id;

    const ad = prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    });

    return response.json({
        discord: ad
    })
})


app.listen(3333)