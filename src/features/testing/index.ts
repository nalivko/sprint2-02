import {Router} from 'express'
import {setDB} from '../../db/db'
import { blogsCollection, postsCollection, usersCollection } from '../../db/mongodb'

export const testingRouter = Router({})

testingRouter.delete('/all-data', (req, res) => {
    // setDB()
    blogsCollection.deleteMany({})
    postsCollection.deleteMany({})
    usersCollection.deleteMany({})
    res.status(204).json({})
})