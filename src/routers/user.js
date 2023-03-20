const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth')




router.post('/users', auth, async (req, res) => {
    console.log('req body :', req.body);
    const user = new User(req.body)

    try {

        await user.save()
        const token = await user.genrateAuthToken()
        res.status(201).send({ user, token })

    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users/me', auth, async(req, res)=> {
    try
    {
        const users = await User.find({})
      res.send(users)

    }
    catch(e)
    {
        res.status(500).send()
    }
})


router.post('/users/login', (req, res, next) => {
    console.log('req.body :', req.body);
    next();
}, async (req, res) => {

    try {
        
        const user = await User.findByCredentials(req.body.email, req.body.password)
        // const token = await user.genrateAuthToken()
        res.send({ user, token })
    }

    catch (e) {
        console.log(e)
        res.status(400).send()

    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(400).send(e)
    }
})



router.get('/users/:id', async (req, res) => {
    const _id = req.params.id


    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }

    catch (e) {
        res.status(500).send()
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'invalid updates' })
    }



    try {

        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()


        if (!user) {
            return res.status(404).send()
        }

        res.send(user)

        //   const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})



        if (!user) {
            return res.status(404).send()
        }

        res.send(user)

    }
    catch (e) {
        res.status(400).send(e)

    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }
    catch (e) {
        res.status(500).send(e)


    }
})


module.exports = router