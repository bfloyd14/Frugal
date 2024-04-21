import { Budget } from "../models/budget.js"

function newBudget(req, res){
  res.render('budgets/new',{
    title: 'Add Budget'
  })
}

function create(req, res){
  for(let key in req.body){
    if(req.body[key] === '') delete req.body[key]
  }
  Budget.create(req.body)
  .then(budget =>{
    res.redirect('/budgets')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function index(req, res){
  Budget.find({})
  .then(budgets =>{
    res.render('budgets/index', {
      budgets,
      title: 'Your Budget'
    })
  })
}

function deleteBudget(res,req){
  Budget.findByIdAndDelete(req.params.budgetId)
  .then(budget =>{
    res.redirect('/budgets')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res){
  Budget.findById(req.params.budgetId)
  .then(budget =>{
    res.render('budgets/show',{
      budget,
      title: 'Budget Details'
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

export {
  newBudget as new,
  create,
  index,
  deleteBudget as delete,
  show,

}