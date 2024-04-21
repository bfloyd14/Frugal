import { Profile } from "../models/profile.js"

function show(req, res){
  Profile.findById(req.user.profile)
  .then(profile =>{
    res.render('profiles/show',{
      profile,
      title: 'My Profile'
    })
  })
}

export{
  show,
}