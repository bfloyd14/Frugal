import { Profile } from "../models/profile.js"

function show(req, res){
  Profile.findById(req.user.profile)
  .then(profile =>{
    res.render('profiles/show',{
      profile,
      title: 'My Profile'
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res){
  for (let key in req.body){
    if(req.body[key] === '') delete req.body[key]
  }
  Profile.findByIdAndUpdate(req.params.profileId, req.body, {new: true})
  .then(profile =>{
    res.redirect(`/profiles/${profile._id}`)
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/profiles')
  })
}

function edit(req, res){
  Profile.findById(req.params.profileId)
  .then(profile =>{
    res.render('profiles/edit',{
      profile,
      title: 'Edit Profile'
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/profiles')
  })
}

function index(req, res){
  Profile.find({})
  .then(profile =>{
    res.render('profiles/index',{
      profile,
      title: 'My Profile'
    })
  })
}

export{
  show,
  update,
  edit,
  index,
}